const axios = require('axios')
const { GoogleSpreadsheet } = require('google-spreadsheet');
const fs = require('fs')
const RESPONSE_SHEET_ID = "1y1Nmo0nhA0wKS-ooUr7aX9HseO0xq14uoBxJKkd46Gg";
const doc = new GoogleSpreadsheet(RESPONSE_SHEET_ID)
const credentials = JSON.parse(fs.readFileSync('googleCreds.json'))
const express = require('express');
const cron = require('node-cron');
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
  console.log("Server up and running....")
})

app.get('/home',(req,res)=>{
    res.send("Server up and running...")
})

async function verifyAnwers(){


  async function getChatGPT(question,answer,codingIndex){
    //console.log(question,answer,'questions')
    if(answer.length<15 && codingIndex>=9){
      return "false";
    }
    let prompt = `Act as a evaluator \n Question: ${question}\n Answer: ${answer}\n Is the Answer correct? Just give me true or false.`
    const response = await axios
          .post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-3.5-turbo",
              temperature: 0,
              messages: [
                {
                  role: "user",
                  content: prompt,
                },
              ],
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer "+process.env.OPEN_AI_APIKEY,
              },
            }
          );
          return response.data.choices[0].message.content.toLowerCase()
  }
  
  // *********************************FUNCTION TO FIND OUT LAST EVALUTED ROW INDEX*****************************************
  
  async function findLastEvaluatedRow(sheet, column) {
    const rows = await sheet.getRows();
    for (let i = rows.length - 1; i >= 0; i--) {
      const cellValue = await sheet.getCell(i + 1, column).value;
      if (cellValue === "Evaluated") {
        return i + 1; 
      }
    }
    return 1;
  }
  
  // function wait(time) {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, time);
  //   });
  // }
  
  // *******************************FUNCTION TO READ GOOGLE SPREAD SHEET AND UPDATE IT*********************************
  
  const getRow = async() =>{
  
    await doc.useServiceAccountAuth({
      client_email:credentials.client_email,
      private_key:credentials.private_key
    })
    await doc.loadInfo()
    let sheet = doc.sheetsByIndex[0];
    let rows = await sheet.getRows();
    let cell = await sheet.loadCells()
    let columns = await sheet.getCellByA1('E1')
    const rowCount = sheet.rowCount;
    const count = 4
    let totalReadsAndWrites = 0
    let lastEvaluatedIndex = await findLastEvaluatedRow(sheet, 4);
    console.log(`Row number of first "Evaluated" cell: ${lastEvaluatedIndex}`);
  
    // ***********************LOOP TO START READING EXCEL FROM STARTING APTITUDE QUESTION WHICH MEANS INDEX 4*********************
  
    for(let j=count;j<=count+7;j++){
      const cellQuestion = sheet.headerValues[j]
      for (let i=lastEvaluatedIndex; i < rows.length; i++) {
        //console.log("current index:",j,i)
        //console.log(totalReadsAndWrites,'reads')
        // if(totalReadsAndWrites >= 10){
        //   await wait(10000);
        //   totalReadsAndWrites = 0
        // }
        const cellAnswer = rows[i]._rawData[j];
        const currentCell = await sheet.getCell(i+1,j);
        totalReadsAndWrites++
        let gptResult =cellAnswer ? await getChatGPT(cellQuestion,cellAnswer,count) : 'false'
        console.log(`${rows[i].Email_Address} ${i} ${j} ${gptResult} ${currentCell.a1Address} ${typeof gptResult}`)
        if(gptResult.endsWith(".")){
          gptResult = gptResult.substring(0,gptResult.length-1);
        }
        if(gptResult.length>5){
          if(gptResult.includes("true")&&!gptResult.includes("false")){
            gptResult = "true"
          }else if(!gptResult.includes("true")&&gptResult.includes("false")){
            gptResult = "false"
          }
        }
        if(gptResult == 'true'){
          currentCell.backgroundColor = { red: 0, green: 1, blue: 0 }; // set cell background color to red
          await currentCell.save()
          console.log('color updated')
          totalReadsAndWrites++
        }
        console.log("***********************************")
  
  // ***********ON REACH LAST ROW IT SETS A FLAG As (EVALUTED) IN NEW ROW*********
  
        if(i==rows.length-1){
          const finalCell = await sheet.getCell(i+2,j);
          finalCell.backgroundColor = { red: 1, green: 0, blue: 0 };
          finalCell.value = "Evaluated";
          await finalCell.save()
          console.log('color updated to last cell')
        }
      }
    }
  }
  
  getRow()
}


//   - 11:54
//0 0 * * * - 12AM
//53 12 * * *
cron.schedule('0 0 * * *', async() => {

    console.log("CRON EXECUTED")
    try{
      await verifyAnwers();
    }catch(e){
      console.log("SOMETHING WENT WRONG")
    }
},{
  timezone: 'Asia/Kolkata' 
});

