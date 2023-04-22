let axios = require('axios')

let mainData = {
  // "sujith.reddy@campusuvce.in": {
  //   "Timestamp": "1/16/2023 10:56:42",
  //   "Email Address": "sujith.reddy@campusuvce.in",
  //   "Enter your college name": "University Visvesvaraya College of Engineering",
  //   "Enter your contact number": "6362551810",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": ""
  // },
  // "shilpashree.d@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:04:59",
  //   "Email Address": "shilpashree.d@campusuvce.in",
  //   "Enter your college name": "uvce",
  //   "Enter your contact number": "6361916152",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "0",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "8",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "3",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "3",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "4",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "4",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "7",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "4"
  // },
  // "aarya.subramanyam@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:06:09",
  //   "Email Address": "aarya.subramanyam@campusuvce.in",
  //   "Enter your college name": "University Visvesvaraya College of Engineering",
  //   "Enter your contact number": "9481077613",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "15",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "15000",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": ""
  // },
  // "ganeshprasad.bn@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:09:02",
  //   "Email Address": "ganeshprasad.bn@campusuvce.in",
  //   "Enter your college name": "university visvesvaraya college of engineering",
  //   "Enter your contact number": "6362478284",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "(1/20) + (1/30)=1/12   ->  Answer :- 12 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "15 km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "560 INR",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\nbool checkAnagram(string &str1,string &str2){\n    int n=str1.length();\n    int m=str2.length();\n    \n    if(n>m){\n        return false;\n    }\n    \n    sort(str1.begin(),str1.end());\n    sort(str2.begin(),str2.end());\n    \n    if(str1==str2){\n        return true;\n    }\n    else{\n        return false;\n    }\n}\n\nint main()\n{\n    string str1=\"lool\";\n    string str2=\"cool\";\n    \n    cout<<checkAnagram(str1,str2);\n}\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\n\nvoid merge_sort(int *arr1,int n,int *arr2,int m,int *arr3){\n    int i=0;\n    int j=0;\n    int k=0;\n    \n    while(i<n && j<m){\n        if(arr1[i]<arr2[j]){\n            arr3[k++]=arr1[i++];\n        }\n        else{\n            arr3[k++]=arr2[j++];\n        }\n    }\n    \n    while(i<n){\n        arr3[k++]=arr1[i++];\n    }\n    \n    while(j<m){\n        arr3[k++]=arr2[j++];\n    }\n}\n\nvoid print(int *arr1,int n){\n    for(int i=0;i<n;i++){\n        cout<<arr1[i];\n    }\n    cout<<endl;\n}\n\n\nint main()\n{\n    int arr1[6]={13 ,19 ,23 ,34 ,57 ,78};\n    int n=6;\n    int arr2[6]={1,2,3,4,5,6};\n    int m=6;\n    int arr3[n+m];\n    \n    merge_sort(arr1,n,arr2,m,arr3);\n    print(arr3,n+m);\n    return 0;\n    \n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include <iostream>\n#include <algorithm>\n\nusing namespace std;\nvoid swap_order(int *arr1,int n){\n    for(int i=0;i<n;i+=2){\n        int temp=arr1[i];\n        arr1[i]=arr1[i+1];\n        arr1[i+1]=temp;\n    }\n}\n\nvoid print(int *arr1,int n){\n    for(int i=0;i<n;i++){\n        cout<<arr1[i];\n    }\n    cout<<endl;\n}\n\n\nint main()\n{\n    int arr1[6]={13 ,19 ,23 ,34 ,57 ,8};\n    int n=6;\n    \n    swap_order(arr1,n);\n    print(arr1,n);\n    return 0;\n    \n}\n"
  // },
  // "deepa.a.p@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:25:11",
  //   "Email Address": "deepa.a.p@campusuvce.in",
  //   "Enter your college name": "University Visvesvaraya College of Engineering",
  //   "Enter your contact number": "8088372278",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "1L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "10649",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "6 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25 km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "542 Rs",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "\nclass solution:\ndef isAnagram(self, a, b):\nif sorted(a) == sorted(b);\nreturn True\nelse: return False\n\n{\nif __name__ == '__main__':\na = \"loco\"\nb = \"cool\"\nif(solution().Anagram(a, b)):\nprint(\"The two strings are anagrams of each other\")\nelse:\nprint(\"The two strings are not anagrams of each other \")\n}\n\noutput:\ninput a = \"loco\", b = \"cool\"\noutput = True\n\ninput  a = \"poolo\", b = \"loop\"\noutput = False \n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def mergeArrays(arr1, arr2, n1, n2, arr3):\ni = 0\nj = 0\nk = 0\n\nwhile(i<n1):\narr3[k] = arr1[i]\nk+ = 1\nj+ = 1\n\narr3.sort()\n\nif __name__ == '__main__':\narr1 = [1, 3, 5, 7]\nn1 = len(arr1)\n\narr2 = [2, 4, 6, 8]\nn2 = len(arr2)\n\narr3 = [0 for i in range (n1+n2)]\nmergeArrays(arr1, arr2, n1, n2, arr3)\nprint(\"Array after merging\")\nfor i in range(n1+n2):\nprint(arr3[i], end= \" \")\n\n\noutput:\narray after merging\n1 2 3 4 5 6 7 8 \n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": ""
  // },
  "srajani.gopalanaik@campusuvce.in": {
    "Timestamp": "1/16/2023 11:32:42",
    "Email Address": "srajani.gopalanaik@campusuvce.in",
    "Enter your college name": "University visvesvaraya College Of Engineering bangaloore",
    "Enter your contact number": "8762954795",
    "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "30 liters of vineger should be  added to the mixture to make it 25% of vineger.",
    "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "The total no of voters enrolled in the election is 20533",
    "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "Time = Tank Volume /(Rate of Pipe A + Rate of pipe B)   However  we  are missing some details like tank volume and rate of pipe A and B.",
    "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "Distance travelled by the car A is =55*2.5 Distance travelled by the car B = 65* 2.5 = 162.5  Distance between car A and B = 162.5 - 137.5 = 25 km ",
    "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "Original price = Final Price/(1-Discount Percentage)  Original Price = 480 /(1-15/100) = 480/(1-0.15)= 480/0.85 = 560 So, the Original price of Naveens's purchase before the discount was 560 INR",
    "coding question:Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include<iostream>\nusing namespace std;\n\n\n\nbool isAnagrams(String s1,String s2)\n{\nif(s1.length()!=s2.length())\nreturn false;\nint freq[26]={0};\nfor(int i =0;i<s2.length;i++)\nfreq[s1[i]-'a']++;\nfor(int i=0;i<s2.length();i++)\nfreq[s2[i]-'a']--;\nfor(int i =0;i<26;i++)\nif(freq[i]!=0)\nreturn false;\nreturn true;\n}\n\n\nint main()\n{\nstring str1 = \"poolo\" ;\nstring str2 = \"loop\";\nif(boolAnagram(str1,str2))\n{\ncout<<\"The  2 Strings are Anagrams \"<<endl;\n}\nelse\n{ \ncout<<\"The 2 Strings are not Anagrams \"<<endl;\n}\nreturn 0;\n}",
    "coding question:Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "\n#include<iostream>\nusing namespace std;\n\nvoid merge(int arr[] ,int n)\n{\nint i =0,j=0,k=0;\nint arr3[];\nwhile(i<n1 && j<n2)\n{\nif(arr1[i]<arr2[j])\n{\n arr3[k++]= arr1[i++];\n}\nelse\n{\narr3[k++]=arr2[i++];\n}\nwhile(i<n1)\narr3[k++]=arr1[i++];\nwhile(j<n2)\narr3[k++]=arr2[j++];\n}\n\nint main()\n{\nint arr1[] ={2,9,1,3,4};\nint arr2[]={6,7,4,8};\nint n1 = arr1.lenght();\nint n2 = arr2.lenght();\nmergeSort(arr,n1,n2);",
    "coding question:Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include<iostream>\nusing namespace std;\nvoid swap_odd_even(int arr[],int n)\nfor(int i=1;i<n-1;i+=2)\n{swap(arr[i],arr[i+1]);\n}\n}\nint main()\n{\nint arr[] = {1,2,3,4,5,6}\nint n = sizeof(arr)/sizeof(arr[0]);\nswap_odd_even(arr,n);\nfor(int i =0;i<n;i++)\n{\ncout<<arr[i]<<\" \";\n}\nreturn 0;\n}"
  },
  "sb.vinay@campusuvce.in": {
    "Timestamp": "1/16/2023 11:33:02",
    "Email Address": "sb.vinay@campusuvce.in",
    "Enter your college name": "University Visvesvaraya College of Engineering",
    "Enter your contact number": "8971488400",
    "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "30 litres",
    "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20533",
    "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes",
    "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25 kms",
    "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "Rs. 560 ",
    "coding question:Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "C++ program:\n#include<bits/stdc++.h>\nusing namespace std;\nbool isAngaram(String str1,String str2){\nint count1[256]={0};\nint count2[256]={0};\nfor(int i=0;str1[i]&&str2[i];i++){\ncount1[str1[i]]++;\ncount2[str2[i]]++;\n}\nif(str1[i]||str2[i])\nreturn false;\n\nfor(int i=0;i<256;i++)\nif(count1[i]!=count2[i])\nreturn false;\n\nreturn true;\n}",
    "coding question:Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "C++ program:\n#include<bits/stdc++.h>\nusing namespace std;\nvoid merge(int[] a,int[] b,int[] c){\nint i=0,j=0,k=0;\nint lena=a.size();\nint lenb=b.size();\nwhile(i<lena && j<lenb){\nif(a[i]<b[j]){\nc[k++]=a[i];\ni++;\n}else{\nc[k++]=b[j];\nj++;\n}}\nwhile(i<lena){\nc[k++]=a[i++];\n}\nwhile(j<lenb){\nc[k++]=b[j++];\n}\n}",
    "coding question:Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "C++ program:\n#include<bits/stdc++.h>\nusing namespace std;\nvoid swap(int[] a){\nint n=a.size();\nfor(int i=0;i+1<n;i+=2){\nint temp=a[i];\na[i]=a[i+1];\na[i+1]=temp;\n}\n}"
  },
  "surajkumar.r@campusuvce.in": {
    "Timestamp": "1/16/2023 11:37:09",
    "Email Address": "surajkumar.r@campusuvce.in",
    "Enter your college name": "University visvesvaraya college of engineering",
    "Enter your contact number": "9019205936",
    "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "30l",
    "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20533",
    "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12mins",
    "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25kms",
    "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "560",
    "coding question:Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "class Anagram{\nstatic int no_chars=256;\nstatic boolean areAnagram(char[] s1,char[] s2)\n{\nint[] c= new int[n0_chars];\nint i=0;\nif(s1.lenght != s2.lenght)return false;\nfor(i=0;i<s1.length;i++){\nc[s1[i]]++;\nc[s2[i]]--;\n}\nfor(i=0;i<no_chars;i++)\n{\nif(c[i]!=0){\nreturn false;\n}\nreturn true;\n}\npublic static void main(String args[]){\nScanner scan = new Scanner(System.in);\nString s1 = scan.nextLine();\nchar[] c1 = s1.toCharArray();\nString s2 = scan.nextLine();\nchar[] c2 = s2.toCharArray();\nif(areAnagram(c1,c2){\nSystem.out.print(\"are Anagram\");\n}else{\nSystem.out.print(\"Are not Anagram\")}\n}\n}",
    "coding question:Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "//only function\npublic static void merge(int[] a1,int[] a2,int n1,int n2,int[] a3){\nint i=0,j=0,k=0;\nwhile(i<n1){\na3[k++]=a1[i++];\n}\nwhile(j<n2){\na3[k++]=a2[j++];\n}\nArrays.sort(a3)\n}",
    "coding question:Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "public static void main(String args[]){\nScanner scan =  new Scanner(System.in);\nint n = scan.nextInt();\nint[] a = new int[n];\nfor(int i=0;i<n;i++){\na[i]=scan.nextInt();\n}\nfor(int i=0;i<a.length-1;i++){\nswap(a,i,i+1);\n}\n}\nstatic void swap(int[] a,int i,int j){\nint temp= a[i];\na[i]=a[j];\na[j]=temp;\n}"
  },
  // "akash.g@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:37:46",
  //   "Email Address": "akash.g@campusuvce.in",
  //   "Enter your college name": "University Visvesvaraya College Of Engineering(UVCE)",
  //   "Enter your contact number": "7676906213",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "30 L , to determine how much vinegar to be added to mixture to make it 25% vinegar ,lets use formula (vinegar/(vinegar+water)) = 0.25.",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20533 votes",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes (time=tank volume/(rate of pipe A + rate of pipe B)",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25 km (distance = speed/time)  Dist A = 55*2.5 = 137.5km , Dist B = 65*2.5 =162.5km , (162.5-137.5 =25km)",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "560 Rs ,(original price =final price/(1-discount %)",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "bool isAnagram( string s1 , string s2){\n     if(s1.length() != s2.length()) return false;\n          int ans[26] = {0};\n     for(int i=0; i<s1.length() ; i++)\n          ans[s1[i]-'a']++;\nfor(int i=0; i<s2.length() ; i++)\n         ans[s2[i]-'a']--;\nfor(int i=0; i<26; i++){\n        if(ans[i]!=0) return false;\nreturn true;\n}\n\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "vectot<int>Merge(vector<int>&arr1, vector<int>&arr2){\nvector<int>ans;\nint i=0, j=0;\nwhile(i<arr1.size() && j<arr2.size()){\n if(arr1[i] < arr2[j]){\nans.push_back(arr1[i]);\n i++;\n}\nelse{\nans.push_back(arr2[j]);\nj++;\n}\n}\n\nwhile(i<arr1.size()){\nans.push_back(arr1[i]);\ni++;\n}\nwhile(j<arr2.size()){\nans.push_back(arr2[j]);\nj++;\n}\nreturn ans;\n}\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include<bits/stdc++.h>\nusing namespace std;\n\nvoid swapOddEven(int arr[], int n){\nfor(int i=1; i<n-1; i+=2){\nswap(arr[i], arr[i+1]);\n}\n}\nint main(){\nint arr[];\nint n=sizeof(arr)/sizeof(arr[0]);\nfor(int i=0 ; i<n; i++){\ncin>>arr[i];\n}\ncin>>n;\nswapOddEven(arr,n);\nfor(int i=0; i<n; i++){\ncout<<arr[i]<<\" \";\n}\nreturn 0;\n}\n"
  // },
  // "k.s.vinay@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:41:43",
  //   "Email Address": "k.s.vinay@campusuvce.in",
  //   "Enter your college name": "University Visvesvaraya College of Engineering",
  //   "Enter your contact number": "6362541870",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "4L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12min",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "565",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include <iostream>\nusing namespace std;\n\nvoid main() {\n     char a[50],b[50];\n    int i,j;\n    int m=0,n=0,t=0;\n    cout<<\"\\n Enter size of first and second name(less than 50) : \";\n    cin>>m>>n;\n    cout<<\"\\n Enter first name : \";\n    {\n    for(i=0;i<m;i++)\n    cin>>a[i];\n    }\n    cout<<\"\\n Enter second name : \";\n    {\n        for(i=0;i<n;i++)\n    cin>>b[i];\n    }\n    if(m==n)\n    {\n        for(i=0;i<m;i++)\n        for(j=0;j<n;j++){\n        if(a[i]==b[j])\n        {\n            t++;\n            break;\n        }\n        \n    }\n    }\n    if(t==m)\n    cout<<\"true\";\n    else\n    cout<<\"false\";\n        // your code goes here\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "#include <iostream>\nusing namespace std;\n\nvoid main() {\n     int arr[5]={1,4,2,6,7};\n     int brr[5]={23,32,10,9,65};\n     int temp=0;\n     for(int i=0;i<5;i++)\n     if(arr[i]>arr[i+1])\n     {\n         temp=arr[i];\n         arr[i]=arr[i+1];\n         arr[i+1]=temp;\n     }\n     for(int j=0;j<5;i++)\n     if(arr[j]>arr[j+1])\n     {\n         temp=arr[j];\n         arr[j]=arr[j+1];\n         arr[j+1]=temp;\n     }\n     int crr[10];\n     for(i=0;i<5;i++)\n     crr[i]=arr[i];\n     for(i=5;i<10;i++)\n     crr[i]=brr[i-5];\n     for(j=0;j<10;i++)\n     if(crr[j]>crr[j+1])\n     {\n         temp=crr[j];\n         crr[j]=crr[j+1];\n         crr[j+1]=temp;\n     }\n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include<iostream.h>\n#include<stdio.h>\nvoid main(){\n    int arr[6]={2,5,3,44,22,65}\n    for(int i=0;i<6;i=i+2)\n    arr[i]=arr[i+1];\n}\n"
  // },
  // "charitha.m@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:50:27",
  //   "Email Address": "charitha.m@campusuvce.in",
  //   "Enter your college name": "university visveswaraya college of engineering",
  //   "Enter your contact number": "8088343899",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "30 l",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "18000",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minuetes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "52km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "rs.1224",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def mergeArrays(arr1,arr2,n1,n2,arr3):\ni=0\nj=0\nk=0\nwhile(i<n1);\narr3[k]=arr1[i]\nk+=1\nj+=1\narr3.sort()\nif name==main\narr1=\n[1,2,4,5]\nn1=len(arr1)\nn2=len(arr2)\nmergeArrays(arr1,arr2,n1,n2,arr3)\nprint('Array after merging')\nfor i in range (n1  +n2)\nprint(arr3[1],end=\" \")",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "def swapEvenOdd (arr);\nstack = []\nstack.append((0, arr[0],))\nfor i in range(1,len(arr))\nif stack\nif arr[i]%2 !=stack[-1] [1]%2\nindex,val =stack.pop(-1)\narr[index]=arr[i]\narr[i]=val\nelse\nstack.append((i, arr[i],))\nelse\nstack.append((i,arr[i],))\nreturn arr\nif __name__=='__main__':\narr=[13,19,23,34,57,8]\nprint(swapEvenOdd(arr))\n\n\n"
  // },
  // "karan.rathod@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:51:42",
  //   "Email Address": "karan.rathod@campusuvce.in",
  //   "Enter your college name": "University Visvesvaraya College Of Engineering",
  //   "Enter your contact number": "9353042508",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "10",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "54560",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "565.88 INR",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include<iostream>\nusing namespace std;\n\nbool isanagram(string str1,string str2)\n{\n   if(str1.length()!=str2.length())\n  {\n     return false;\n   }\n\n for(int i=0;i<str1.length()-1;i++)\n {\n  if(str1[i]>str1[i+1])\n {\n  char temp=str1[i];\n  str1[i]=str1[i+1];\n  str1[i+1]=temp;\n  i=-1;\n }\n}\n\nfor(int i=0;i<str2.length()-1;i++)\n{\n  if(str2[i]>str2[i+1])\n{\n  char temp=str2[i];\n  str2[i]=str2[i+1];\n  str2[i+1]=temp;\n  i=-1;\n}\n}\nif(str1==str2)\n{\n return true;\n}\n\n   \nint main()\n{\n   string str1;\n   cin>>str1;\n   string str2;\n   cin>>str2;\n   isanagram();\n  return 0;\n}\n\n\n   \n\n\n\n\n\n\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "#include<iostream>\nusing namespace std;\n\nint main()\n{\n  int n;\n  cin>>n;\n  int a[n];\n\n  int m;\n  cin>>m\n  int b[m];\nfor(int i=0;i<n;i++)\n{\n  cin>>a[i];\n}\nfor(int i=0;i<m;i++)\n{\n  cin>>b[i];\n}\n\nint res[n+m];\nk=0;\nfor(int i=0;i<n;i++)\n{\n   res[k]=a[i];\n   k++;\n}\nfor(int i=0;i<m;i++)\n{\n   res[k]=b[i];\n   k++;\n}\n\nfor(int i=0;i<(n+m)-1;i++)\n{\n   if(res[i]>res[i+1])\n   {\n      int temp=res[i];\n      res[i]=res[i+1];\n      res[i+1]=temp;\n      i=-1;\n    }\n }\n\nfor(int i=0;i<(n+m);i++)\n{\n   cout<<res[i]<<\"  \";\n }\nreturn 0;\n}\n  \n\n\n\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include<iostream>\nusing namespace std;\n\nint main()\n{\n   int n;\n   cin>>n;\n   int a[n];\nfor(int i=0;i<n;i++)\n{\n   cin>>a[i];\n}\nfor(int i=0;i<n;i+=2)\n{\n  int temp=a[i];\n  a[i]=a[i+1];\n  a[i+1]=temp;\n}\nfor(int i=0;i<n;i++)\n cout<<a[i]<\" \";\nreturn 0;\n}"
  // },
  // "harshitha.nr@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:52:27",
  //   "Email Address": "harshitha.nr@campusuvce.in",
  //   "Enter your college name": "Harshitha N R",
  //   "Enter your contact number": "8088145725",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "10 liters",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "300km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "3,200",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include<bits/stdc++.h>\nusing namespace std;\nbool Anagram(string string1, string string2){\n   int len1= string1.length();\n   int len2= string2.length();\n   if(len1!= len2) {\n      return false;\n   }\n   unordered_map <char,int> mp;\n   for(int i=0;i<string1.size();i++) {\n      mp[string1[i]]++;\n      mp[string2[i]]--;\n   }\n   for(auto it:mp){\n      if(it.second) \n      return false;\n   }\n   return true;\n}\nint main(){\n   string a= \"loco\";\n   string b= \"cool\";\n   cout<< Anagram(string1,string2)<<endl;\n     return 0;\n}\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "\n(logic for merge sort)\n\nmergesort(int A[],int lb, int up)\n{\nif(lb<ub)\n{\nint mid=(lb+ub)/2;\nmergeosrt(A,lb,mid);\nmergeosrt(A,mid+1,ub);\nmergesortA,lb,mid,ub);\n}\nmerge(A,lb,mid,ub)\n{\n    int i,j,k;\n   i=lb;\nj=mid+;\nk=ub;\nwhile(i<=mid && j<=ub)\n{\n      if(A[i]<=A[j])\n         {\n             B[k]=A[i];\n               i++;\n                 k++;\n          }\n        else\n          {\n                 B[k]=A[j];\n                    j++;\n                   k++;\n              }\n}\nif(i>mid)\n{\n    while(j<=ub)\n    {\n                 B[k]=A[j];\n                   j++;\n                    k++;\n    }\n}\nelse\n{\n     while(i<=mid)\n     {\n       A[k]=A[i];\n        i++;\n        k++;\n    }\n}\nfor(k=lb;k<ub;k++)\n{\n   A[k]=B[k];\n}\n\n}\n              \n\n\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include <bits/stdc++.h>\nusing namespace std;\n \nvoid OddAndEven(int arr[], int n)\n{\n   int i= 1;\n    int j = 0;\n    while (true)\n    {\n        while (j < n && arr[j] % 2 == 0)\n             j+= 2;\n             \n        while (i < n && arr[i] % 2 == 1)\n            i+= 2;\n             \n        if (j < n && i< n)\n            swap (a[j], arr[i]);\n             \n        else\n            break;\n    }\n}\n \n\nvoid printArray(int arr[], int n)\n{\n    for (int i = 0; i < n; i++)\n        cout << arr[i] << \" \";\n}\n \n\nint main()\n{\n    int arr[] = { 13 19 23 34 57 8};\n    int n = sizeof(arr) / sizeof(arr[0]);\n \n    cout << \"Original Array: \";\n    printArray(arr, n);\n \n   OddAndEven(arr, n);\n \n    cout << \"\\nModified Array: \";\n    printArray(arr, n);\n \n    return 0;\n}"
  // },
  // "harish.v@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:52:40",
  //   "Email Address": "harish.v@campusuvce.in",
  //   "Enter your college name": "University Visveswaraya College of engineering",
  //   "Enter your contact number": "8197938010",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "10.8",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "16800",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "1224",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include <stdio.h>\nint check_anagram(char [],char []);\n\nint main() {\n    char a[1000],b[1000];\n    printf(\"enter two stings\");\n    gets(a);\n    gets(b);\n    if(check_anagram(a,b))\n    printf(\"strings are anagram\");\n    else\n    printf(\"strings are not anagram\");\n    return 0;\n    \n}\nint check_anagram(char a[],char b[]){\n    int first[26]={0},second[26]={0},c=0;\n    while(a[c]!='\\0'){\n        first[a[c]-'a']++;\n        c++;\n    }\n    c=0;\n    while(b[c]!='\\0'){\n        \n    second[b[c]-'a']++;\n    c++;\n    }\n    for(c=0;c<26;c++)\n    if(first[c]!=second[c])\n    return 0;\n    return 1;\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "class Solution:\n    def solve(self,nums):\n        length=len(nums)\n        for i in range(0,length,4):\n            if(i+2<length):\n                nums[i],nums[i+2]=nums[i+2],nums[i]\n            if(i+3<length):\n                nums[i+1],nums[i+3]=nums[i+3],nums[i+1]\n                return nums\nob=Solution()\nnums=[13,19,23,34,57,8]\nprint(ob.solve(nums))"
  // },
  // "srujan.kumarr@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:54:02",
  //   "Email Address": "srujan.kumarr@campusuvce.in",
  //   "Enter your college name": "University of Visvesvaraya College of Engineering",
  //   "Enter your contact number": "9731548991",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "10 Litres",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "16800",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "9 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25 kms",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "1224",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "def anagram(a,b):\n    if len(a) != len(b):\n        return False\n    \n    countA , countB = {},{}\n    for i in range(len(a)):\n        countA[a[i]] = 1 + countA.get(a[i] , 0)\n        countB[b[i]] = 1 + countB.get(b[i] , 0)\n    return countA == countB\na = input()\nb = input()\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def merge(arr1,arr2):\n    arr = []\n    i,j = 0,0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] < arr2[i]:\n            arr.append(arr1[i])\n            i+=1 \n        else:\n            arr.append(arr2[i])\n            j+=1 \n    while i < len(arr1):\n        arr.append(arr1[i])\n        i+=1 \n    while j < len(arr2):\n        arr.append(arr2[i])\n        j+=1 \n    return (arr)\n    print(arr)\narr1_inp = input(\" \")\narr2_inp = input(\" \")\narr1 = [int(x) for x in arr1_inp.split(\",\")]\narr2 = [int(x) for x in arr2_inp.split(\",\")]\n            ",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "def swap_numbers(arr):\n    for i in range(1,len(arr) - 1,2):\n        arr[i] , arr[i+1] = arr[i+1] , arr[i]\n    return arr\narr = [13,19,23,34,57,8]\narr = swap_numbers(arr)\nprint(arr)\n"
  // },
  // "sachin.ag@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:55:55",
  //   "Email Address": "sachin.ag@campusuvce.in",
  //   "Enter your college name": "University visvesvaraya college of engineering",
  //   "Enter your contact number": "9611491805",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "pipe a in  1 min=1/20  and pipe b  in 1 min =1/30  so pipe(a+b) in 1 in =1/20+1/30 so that is equal to 1/12 .",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "def anangram(str1,str2):\n    dic={}\n    for i in str1:\n        if i in dic:\n            dic[i]+=1\n        else:\n            dic[i]=1\n    for i in str2:\n        if i in dic:\n            dic[i]-=1\n        else:\n            dic[i]=1\n    for k,v in dic.items():\n        if v!=0:\n            return False\n    return True\nprint(anangram(\"poolo\",\"loop\"))",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def  mereg(arr1,arr2):\n    i=0\n    j=0\n    mer=[]\n    while i<len(arr1) and j<len(arr2):\n         if arr1[i]<arr2[j]:\n             mer.append(arr1[i])\n             i+=1\n         else:\n             mer.append(arr2[j])\n             j+=1\n    while i<len(arr1):\n        mer.append(arr1[i])\n        i+=1\n    while j<len(arr2):\n        mer.append(arr2[j])\n        j+=1\n    return mer\nprint(mereg([1,3,4,7],[3,9,10,15]))",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "def swapevenodd(arr):\n    n=len(arr)\n    i=0\n    j=1\n    while i<n and j<n:\n        if arr[i]%2==0:\n            i+=2\n        elif arr[j]%2==1:\n            j+=2\n        else:\n            arr[i],arr[j]=arr[j],arr[i]\n    return arr\nprint(swapevenodd([13,19, 23 ,34 ,57 ,8]))"
  // },
  // "divya.u@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:58:32",
  //   "Email Address": "divya.u@campusuvce.in",
  //   "Enter your college name": "University Visvesvaraya College Of Engineering",
  //   "Enter your contact number": "7975479958",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "15",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20533.33",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "565.88 INR",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include <iostream>\nusing namespace std;\n\nbool isanagram(string str1,string str2)\n{\n    if(str1.length()!str2.length())\n    {\n        return false;\n    }\n    for(int i=0;i<str1.length()-1;i++)\n    {\n        if(str1[i]>str1[i+1])\n        {\n            char temp=str1[i];\n            str1[i]=str1[i+1];\n            str1[i+1]=temp;\n            i=-1;\n        }\n        \n    }\n    for(int i=0;i<str2.length()-1;i++)\n    {\n         if(str2[i]>str2[i+1])\n        {\n            char temp=str2[i];\n            str2[i]=str2[i+1];\n            str2[i+1]=temp;\n            i=-1;\n        }\n        \n    }\n    if(str1==str2)\n    {\n        return true;\n    }\n}\nint main()\n{\n    string str1;\n    cin>>str1;\n    string str2;\n    cin>>str2;\n    isanagram();\n    return 0;\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "#include <iostream>\nusing namespace std;\n\nvoid merge(int num1[],int num2[],int m,int n)\n{\n    int num3[m+n];\n    for(int i=0;i<m;i++)\n      num3[i]=num1[i];\n      for(int i=0;i<n;i++)\n      {\n          int temp=num2[i];\n          int j=m-1;\n          for(j=0;j>=0;j--)\n          {\n              if(num3[j]>temp)\n              {\n                  num3[j+1]=num3[j];\n              }\n              else\n              break;\n          }\n          m=m+1;\n          num3[j+1]=temp;\n      }\n      cout<<\"array after merging\"<<endl;\n      for(int i=0;i<m;i++)\n      cout<<num3[i]<<\" \";\n      \n}\nint main()\n{\n    int num1[]={1,2,3,4};\n    int num2[]={2,5,8,9}\n    int num3[]={8,9,6,0};\n    int m = sizeof(num1)/sizeof(num1[0]);\n    int n = sizeof(num2)/sizeof(num2[0]);\n    merge(num1,num2,m,n);\n    return 0;\n    \n}\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include <iostream>\nusing namespace std;\n\nint main() {\n\t// your code goes here\n\tint n;\n\tcin>>n;\n\tint a[n];\n\tfor(int i=0;i<n;i++)\n\t{\n\t    cin>>a[i];\n\t    \n\t}\n\tfor(int i=0;i<n;i+=2)\n\t{\n\t    int temp=a[i];\n\t    a[i]=a[i+1];\n\t    a[i+1]=temp;\n\t}\n\tfor(int i=0;i<n;i++)\n\tcout<<a[i]<<\" \";\n\treturn 0;\n}\n"
  // },
  // "tirumal.m.g@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:58:51",
  //   "Email Address": "tirumal.m.g@campusuvce.in",
  //   "Enter your college name": "University Vishweshwaraya College Of Engineering (UVCE)",
  //   "Enter your contact number": "+918296562509",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "-->3Liters",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "12,346 voters",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "15km/hr",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "560 Rs",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "import java.util.*;\n\n\npublic class Main{\n\nstatic boolean checkAnagram(char[ ] str1, char[ ] str2 ){\nint [ ] charArray= new int[ 256];\nint length1=str1.length;\nint length2=str2.length;\n\nif(length1!= length2){\nreturn false;\n}\n\nfor(int i=0; i<length1; i++){\n    charArray[str1[i] ]++;\n   charArray[str1[i]]--;\n\n}\n\nfor(int i=0; i<256; i++){\nif(charArray[i]!=0){\nreturn false;\n}\n}\nreturn true;\n\n} \n\n\n\n\n\n\n\npublic static void main(String[] args){\nString str1=\"loco\";\nString str2=\"cool\";\n\nchar [ ]  s1=str1.toCharArray();\nchar [ ] s2=str2.toCharArray();\n\n//function call to check  if they are nagram or not\nboolean ans=checkAnagram(s1,s2);\n\nif(ans){\nSystem.out.println(\"Two Strings are anagrams\");\n}else{\nSystem.out.println(\"Two Strings are not anagrams\");\n}\n\n\n\n}\n\n\n}\n\n\n\n\n\n\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "import java.util.*;\n\n\npublic class Main{\n\nstatic void mergeTwosortedArray(int[] arr1, int[] arr2, int lenght1, int length2, int[] ans) {\n\nint i=0,j=0,k=0;\n\nwhile(i<length1 && j<length2){\n\n//check the elements of each array\nif(arr1[i]<arr2[i]){\nans[k++]=arr1[i++];\n}else{\nans[k++]=arr2[j++];\n}\n}\n//check for the remaining elements in both arrays\nwhile(i<length1){\nans[k++]=arr1[i++];\n}\n\nwhile(j<length2){\nans[k++]=arr2[j++];\n}\n\n\n\n} \n\n\npublic static void main(String[] args){\n\n\nint [ ]  arr1={1,4,5};\nint [ ] arr2={3,6,7,8};\nint length1=arr1.length;\nint length2=arr2.length;\n\nint[ ] ans=new int[length1+length2];\n\n//function call to check  if they are nagram or not\nmergeTwosortedArray(arr1,arr2,lenght1,length2,ans)\n\n\nfor(int i=0; i<ans.length; i++){\nSystem.out.print(ans[i] +\" \");\n}\n\n\n\n}\n\n\n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "import java.util.*;\npublic class Main{\npublic static void main(String[] args){\n\n\nint [ ]  arr={13,19,23,34,57,8};\nint length=arr.length;\n\n\n//swap alternatives\\\n\nfor(int  i=0 ;  i<length ;  i+=2) \n\n{\n\n     //logic to swap two numbers\n    int temp = arr[i];\n    arr[i]=arr[i+1];\n    arr[i+1]=temp;\n\n\n}\n\n\nfor(int j=0; j< length; j++){\nSystem.out.print(arr[i]+ \" \"); \n\n\n}\n\n\n\n}\n\n\n}"
  // },
  // "ujwalamin2001@gmail.com": {
  //   "Timestamp": "1/16/2023 11:59:40",
  //   "Email Address": "ujwalamin2001@gmail.com",
  //   "Enter your college name": "University of Visvesvaraya College of Engineering, Bangalore",
  //   "Enter your contact number": "9353336764",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include<iostream>\nusing namespace std;\nint main(){\n    string s1;\n    string s2;\n    bool ans=true;\n    cin>>s1>>s2;\n    int count[26]={0};\n    int m=s1.length();\n    int n=s2.length();\n    if(m!=n)\n        cout<<\"false\";\n    else{\n        for(int i=0;i<m;i++){\n            count[s1[i]-'a']++;\n        }\n        for(int i=0;i<n;i++){\n            count[s2[i]-'a']--;\n        }\n        for(int i=0;i<26;i++){\n            if(count[i]!=0)\n                ans=false;\n                break;\n        }\n        if(ans)\n            cout<<\"true\";\n        else\n            cout<<\"false\";\n    }\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include<iostream>\nusing namespace std;\nint main(){\n    int n;//number of elements\n    cin>>n;\n    int arr[n];//array of size n\n    for(int i=0;i<n;i++){\n        cin>>arr[i];\n    }\n    cout<<endl;\n    int temp=0;\n    for(int i=0;i<n;i++){\n        if(i+1<n){\n            temp=arr[i];\n            arr[i]=arr[i+1];\n            arr[i+1]=temp;\n            i++;\n        }\n    }\n    for(int i=0;i<n;i++){\n        cout<<arr[i]<<\" \";\n    }\n}"
  // },
  // "annapoorna.tr@campusuvce.in": {
  //   "Timestamp": "1/16/2023 11:59:51",
  //   "Email Address": "annapoorna.tr@campusuvce.in",
  //   "Enter your college name": "University Viveshvaraya College of Engineering",
  //   "Enter your contact number": "9353778969",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "12",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20580",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "564.7",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include <bits/stdc++.h>\nusing namespace std;\nbool areAnagram(string str1,string str2)\n{\n    int n1=str1.length();\n    int n2=str2.length();\n    if(n1 !=n2)\n    return false;\n    sort(str1.begin(),str1.end());\n    sort(str2.begin(),str2.end());\n    for(int i=0;i<n1;i++)\n    if(str1[i] !=str2[i])\n    return false;\n    return true;\n}\nint main()\n{\n    string str1=\"loco\";\n    string str2=\"cool\";\n    if(areAnagram(str1,str2))\n    cout<<\"true\"<<endl;\n    else\n    cout<<\"false\"<<endl;\n    return 0;\n    \n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "#include <iostream>\nusing namespace std;\n void mergeArrays(int arr1[],int arr2[],int n1,int n2,int arr3[])\n {\n     int i=0,j=0,k=0;\n     while(i<n1)\n     {\n     \n    arr3[k++]=arr1[i++];\n         \n     }\n     while(j<n2)\n     {\n     arr3[k++]=arr2[j++];\n     }\n    sort(arr3,arr3+n1+n2);\n }\nint main()\n{\n    int arr1[]={1,3,5,7};\n    int n1=sizeof(arr1)/sizeof(arr1[0]);\n    int arr2[]={2,4,6,8};\n    int n2=sizeof(arr2)/sizeof(arr2[0]);\n    int arr3[n1+n2];\n    mergeArrays(arr1,arr2,n1,n2,arr3);\n    cout<<\" merg sorted array is:\"<<endl;\n    for(i=0;i<n1+n2;i++)\n    cout<<arr3[i]<<\" \";\n    return 0;\n    \n}\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include<bits/stdc++.h>\nusing namespace std;\nvoid arrangeOddAndEven(int arr[],int n)\n{\n    int oddInd=1;\n    int evenInd=0;\n    while(true)\n    {\n        while(evenInd<n && arr[evenInd] % 2==0)\n        evenInd+=2;\n        while(oddInd<n && arr[oddInd] % 2==1)\n        oddInd+=2;\n        if(evenInd<n && oddInd<n)\n        swap(arr[evenInd],arr[oddInd]);\n        else\n        break;\n    }\n}\nvoid printArray(int arr[],int n)\n{\n    for(int i=0;i<n;i++)\n    cout<<arr[i]<<\" \";\n}\nint main()\n{\n    int arr[]={12,28,33,4,9,44,66};\nint n=sizeof(arr)/sizeof(arr[0]);\ncout<<\"\\n input:\";\nprintArray(arr,n);\narrangeOddAndEven(arr,n);\ncout<<\"\\n output:\";\nprintArray(arr,n);\nreturn 0;\n    \n}"
  // },
  // "bharath.sb@campusuvce.in": {
  //   "Timestamp": "1/16/2023 12:11:35",
  //   "Email Address": "bharath.sb@campusuvce.in",
  //   "Enter your college name": "UVCE",
  //   "Enter your contact number": "9108186671",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "3L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "12346",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "29 KM",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "560 Rs",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "from collections import Counter\ndef check(s1,s2):\n    if (Counter(s1)==Counter(s2)):\n        print(\"the strings are anagram\")\n    else:\n        print(\"the strings are not anagram\")    \n        \ns1='loco'\ns2='cool'\n(check(s1,s2))",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def merge(arr1,arr2,m,n):\n    \n    for i in range(n-1,-1,-1):\n        last=arr1[m-1]\n        j=m-2\n        while(j>=0 and arr1[j]>arr2[i]):\n            arr1[j+1]=arr1[j]\n            j-=1\n            \n        if (last>arr2[i]):\n            arr1[j+1]=arr2[i]\n            arr2[i]=last\narr1=[1,5,9,10,15,20]\narr2=[2,3,8,13] \nn=len(arr1)\nm=len(arr2)\n\nmerge(arr1,arr2,m,n)   \nprint(\"after merging \\nfirst array:\",end=\"\")\nfor i in range(m):\n    print(arr1[i],\"\",end=\"\")\nprint(\"second array:\",end=\"\")\nfor i in range(n):\n    print(arr2[i],'',end='')                \n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "def sort(arr,n):\n    oddindex=1\n    evenindex=0\n    \n    while(True):\n        \n        while(evenindex<n and arr[evenindex]%2==0):\n            evenindex+=2\n        while(oddindex<n and arr[oddindex]%2==1):\n            oddindex+=2\n            \n        if (evenindex<n and oddindex<n):\n            temp=arr[evenindex]\n            arr[evenindex]=arr[oddindex]\n            arr[oddindex]=temp\n        else:\n            break\ndef printarr(arr,n):\n    for i in range(0,n):\n        print(arr[i],\" \",end=\" \")\n        \n        \ndef main():\n    arr=[1,2,3,4]\n    n=4\n    print(\"original array\",end=\"\")\n    printarr(arr,n)\n    sort(arr,n)  \n    printarr(arr,n) "
  // },
  // "yelampallikarthik@gmail.com": {
  //   "Timestamp": "1/16/2023 12:17:35",
  //   "Email Address": "yelampallikarthik@gmail.com",
  //   "Enter your college name": "Sri Venkateswara University College of Engineering",
  //   "Enter your contact number": "6309432696",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "4L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "552",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "import java.util.*;\nimport java.lang.*;\nclass Solution{\npublic static boolean anagram(String s1,String s2){\nint x = s1.length();\nint y = s2.length();\nif(x!=y) return false;\ns1 = s1.toLowerCase();\ns2 = s2.toLowerCase();\nchar[] a1 = s1.toCharArray();\nchar[] a2 = s2.toCharArray();\nArrays.sort(a1);\nArrays.sort(a2);\nif(a1.equals(a2)) return true;\nelse return false;\nreturn true;\n\npubic static void main(String[] args){\nScanner sc = new Scanner(System.in);\nString s1=sc.next();\nString s2=sc.next();\nSystem.out.println(anagram(s1,s2));\n}\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "import java.util.*;\nimport java.lang.*;\nclass Solution{\npubic static void main(String[] args){\nint[] a1 = {2,5,7,8,12};\nint[] a2 = {2,3,6,9};\nint i=0;\nint j=0;\nint k=0;\nint x = a1.length;\nint y = a2.length;\nint[] res = new int[x+y];\nwhile(i<x&&j<y){\nif(a1[i]<=a2[j]){\nres[k]=a1[i];\ni++;\nk++;\n}\nelse{\nres[k]=a2[j];\nj++;\nk++;\n}\nwhile(i<x){\nres[k]=a1[i];\ni++;\nk++;\n}\nwhile(j<y){\nres[k]=a2[j];\nj++;\nk++;\n}\nfor(int i=0;i<res.length;i++){\nSystem.out.print(res[i]+\" \");\n}\n}\n}\n\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "import java.util.*;\nimport java.lang.*;\nclass Solution{\npubic static void main(String[] args){\nint[]  a = {13.19,23,34,57,8};\nif(a.length==0) System.out.println('[]');\nelse if(a.length==1) System.out.println(a[0]);\nelse{\nfor(int i=0;i<a.length-1;i=i+2){\nint temp=a[i+1];\na[i+1]=a[i];\na[i]=temp;\n}\n}\nfor(int i=0;i<a.lenght;i++){\nSystem.out.print(a[i]+\" \");\n}"
  // },
  // "anjalijadhav4999@gmail.com": {
  //   "Timestamp": "1/17/2023 13:35:39",
  //   "Email Address": "anjalijadhav4999@gmail.com",
  //   "Enter your college name": "Shri Chhatrapati Shivaji Maharaj College of Engineering",
  //   "Enter your contact number": "9604800862",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "15",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "16800",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 mins",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "5 hours",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "RS. 1224",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "class String { \n\n    static boolean areAnagram(char[] str1, char[] str2) \n\n    {\n\n        int n1 = str1.length; \n\n        int n2 = str2.length; \n\n         if (n1 != n2) \n\n            return false; \n\n       Arrays.sort(str1); \n\n        Arrays.sort(str2); \n\n \n       for (int i = 0; i < n1; i++) \n\n            if (str1[i] != str2[i]) \n\n                return false; \n\n                 return true; \n\n    } \n\n    public static void main(String args[]) \n\n    { \n        char str1[] = { 'l', 'o', 'c', 'o' }; \n\n        char str2[] = { 'c', 'o', 'o', 'l' }; \n       \n if (areAnagram(str1, str2)) \n\n            System.out.println(\"The two strings are\" \n\n                               + \" anagram of each other\"); \n\n        else \n\n            System.out.println(\"The two strings are not\" \n\n                               + \" anagram of each other\"); \n\n    } \n\n}\n  ",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "public class Array {\n    public static void main(String[] args) { \n\n        int arr1[] = {1, 3, 5, 7}; \n        int n1 = arr1.length; \n        int arr2[] = {2, 4, 6, 8}; \n        int n2 = arr2.length; \n        int arr3[] = new int[n1 + n2]; \n\n        mergeArrays(arr1, arr2, n1, n2, arr3); \n\n        System.out.println(\"Array after merging\"); \n\n        for (int i=0; i < n1+n2; i++) \n         System.out.print(arr3[i] + \" \"); \n       } \n    public static void mergeArrays(int[] arr1, int[] arr2, int n1, int n2, int[] arr3){ \n     int i = 0;   \n     int j = 0;   \n     int k = 0;   \n\n while(i < n1){    \n   arr3[k++] = arr1[i++];    \n }   \n while(j < n2){    \n arr3[k++] = arr2[j++];    \n }    \n  Arrays.sort(arr3);    \n} \n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "\nclass Array { \n\npublic static void arrangeOddAndEven(int arr[], int n) \n\n{\n    int oddInd = 1; \n\n    int evenInd = 0; \n\n    while (true) \n\n    { \n        while (evenInd < n && arr[evenInd] % 2 == 0) \n        evenInd += 2; \n\n        while (oddInd < n && arr[oddInd] % 2 == 1) \n        oddInd += 2;\n        if (evenInd < n && oddInd < n) \n{ \n        int temp = arr[evenInd];\n        arr[evenInd] = arr[oddInd];\n        arr[oddInd] = temp; \n}  else \n    break; \n} \n\n}\n\npublic static void printArray(int arr[], int n) \n{\n for (int i = 0; i < n; i++)\n System.out.print(arr[i] + \" \"); \n}\n    public static void main(String argc[]){ \n\n    int arr[] = { 12, 28, 33, 4, 9, 44, 66 }; \n\n    int n = 28; \n\n    System.out.print(\"Original Array: \"); \n\n    printArray(arr, n); \n    arrangeOddAndEven(arr, n); \n    System.out.print(\"Array: \"); \n    printArray(arr, n); \n\n}\n\n} "
  // },
  // "shreyashpatil944@gmail.com": {
  //   "Timestamp": "1/17/2023 13:45:17",
  //   "Email Address": "shreyashpatil944@gmail.com",
  //   "Enter your college name": "kce's college of engineering and magnment ,jalgaon",
  //   "Enter your contact number": "9130566695",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "13.8",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "16800",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "180",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "1224",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": " public class AnagramString{\nString str1=\"loco\";\nString str 2=\"cool\";\nif(Str1.length()=str2.length()){\nchar[] Array 1= str1.tocharArray();\nchar []Array 2=str2.tocharArray();'\nArrays.sort (Array1);\nArrays.sort(Array2);\n boolean result =Arrays.equals(Array1,Array2);\nif (result){\nSystem.out.println (Str1 +\"is an Anagram\" +str2);\n}\nelse{\nSystem.out.println(stre1+\"is not a Anagram\" +str2);\n}\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "public class Sortarray{\nint arr[]=[13,19,23,34,57,8];\nint n = 6; \nint oddInd =1;\niint evenInd =0;\nwhile (true)\n{\nwhile(evenInd < n&& arr[evenInd]%2==0)\nevenInd +=2;\nwhile(oddInd < n&& arr[oddInd]%2==1)\nevenInd +=2;\nif (evenInd <n&&oddInd<n)\n{\nint temp=arr[evenInd];\narr[evenInd] =arr[oddInd];\narr[oddInd] =temp;\nelse\nbreak;\n}\npublic static void main (String args[]){\nprintArray(arr ,n);\narrangeOddAndEven(arr,n);\nprintArray(arr,n);\n}\n}\n"
  // },
  // "ypkhillare2784@gmail.com": {
  //   "Timestamp": "1/17/2023 14:02:52",
  //   "Email Address": "ypkhillare2784@gmail.com",
  //   "Enter your college name": "anuradha engineering college,chikhli",
  //   "Enter your contact number": "+917264808042",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "15",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "15433",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 min",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "1224",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "class anagramstring{\npublic static void main(String args[]){\nString s1=\"loco\";\nString s2=\"cool\";\nchar ch1=s1.toCharArray();\nchar ch2=s2.toCharArray();\nint count=0;\nif(ch1.length!=ch2.length){\nSystem.out.println(\"false\");\n}\nif(ch1.length==ch2.length){\nfor(int i=0;i<=s1.length()-1;i++){\nfor(int j=0;j<=s2.length()-1;j++){\nif(ch1[i]==ch2[j]){\ncount++;\nif(count==1){\nch[j]=0;\n}\n}\n}\n}\nif(s1.length==count){\nSystem.out.println(\"true\");\n}\n}\n}}\n\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "class mergeArray{\npublic static void main(String args[]){\nint arr1[]={1,5,3,7,4};\nint arr2[]={2,6,9,8};\nint arr3[]=new int[arr1.length+arr2.length];\n\n\nfor(int i=0;i<arr1.length;i++){\narr3[i]=arr1[i];\n}\nfor(int i=0;i<arr2.length;i++){\narr3[i+arr1.length]=arr2[i];\n}\nfor(int i=0;i<arr3.length;i++){\nfor(int j=i+1;j<arr3.length;j++){\nif(arr3[i]>arr3[j]){\nint temp=arr3[i];\narr3[i]=arr3[j];\narr3[j]=temp;\n}\n}\n}\nfor(int i=0;i<arr3.length;i++){\nSystem.out.println(arr3[i]);}\n}\n}\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "class Swap{\npublic static void main(String args[]){\nint arr[]={13,19,23,34,57,8};\nfor(int i=0;i<arr.length;i=i+2){\nint temp=arr[i];\narr[i]=arr[i+1];\narr[i+1]=temp;\n}\nSystem.out.println(Array.toString(arr));\n}\n}"
  // },
  // "kaleam250399@gmail.com": {
  //   "Timestamp": "1/17/2023 14:04:08",
  //   "Email Address": "kaleam250399@gmail.com",
  //   "Enter your college name": "Anuradha Engineering College",
  //   "Enter your contact number": "9370130610",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "15 Ltr",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "total number of voters=15433",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 Min",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "Rs 1224",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "class Anagramstring{\npublic static void main(String [] args){\nString s1=\"loco\";\nString s2=\"cool\";\nchar ch1=s1.toCharArray();\nchar ch2=s2.toCharArray();\nint count =0;\nif(ch1.length!=ch2.length){\nSystem.out.println(\"false\");\n}\nif(ch1.length==ch2.length){\nfor(int i=0;i<=s1.length()-1;i++){\nfor(int j=0;j<=s2.length()-1;j++){\nif(ch1[i]==ch2[j]){\ncount++;\nif(count==1){\nch[j]=0;\n}\n}\n}\n}\nif(s1.length==count){\nSystem.out.println(\"true\");\n}\n}\n}\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "class mergeArray{\npublic static void main(String [] args){\nint arr[]={1,3,4,6,7};\nint arr[]={2,5,8,9};\nint arr3[]=new int[arr1.length =arr2.length];\n\nfor(int i=0;i<arr1.length;i++){\narr3[i]=arr1[i];\n}\nfor(int i=0;i<arr2.length;i++){\narr3[i+arr1.length]=arr2[i];\n}\nfor(int i=0;i<arr3.length;i++){\nfor(int j=i+1;j<arr3.length;j++){\nif(arr3[i]>arr3[j]){\nint temp=arr3[i];\narr3[i]=arr3[j];\narr3[j]=temp;\n}\n}\n}\nfor(int i=0;i<arr1.length;i++){\nSystem.out.println(arr3[i]);\n}\n}\n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "class Swap{\npublic static void main(String [] args){\nint arr[]={13,19,23,34,57,8};\nfor(int i=0;i<arr.length;i=i+2){\nint temp=arr[i];\narr[i+1];\narr[i+1]=temp;\n}\nSystem.out.println(arr);\n}\n}\n\n"
  // },
  // "vamsinayak18@gmail.com": {
  //   "Timestamp": "1/28/2023 10:59:33",
  //   "Email Address": "vamsinayak18@gmail.com",
  //   "Enter your college name": "Rajiv Gandhi University of knowledge technologies",
  //   "Enter your contact number": "8688409225",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "20",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20533",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "564.7",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "def anag(s1,s2):\n    if(len(s1) != len(s2)):\n        return False\n    s1_freq={}\n    s2_freq={}\n    for i in s1:\n        if i in s1_freq:\n            s1_freq[i]+=1\n        else:\n            s1_freq[i] = 1\n    for j in s2:\n        if j in s2_freq:\n            s2_freq[j]+=1\n        else:\n            s2_freq[j] = 1\n    \n    if s1_freq == s2_freq:\n        return True\n    return False\n\ns1=\"poolo\"\ns2=\"loop\"\nprint(anag(s1,s2))",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def merge(a1,a2):\n    i=0\n    j=0\n    l=0\n    n1=len(a1)\n    n2=len(a2)\n    res=[0 for i in range(n1+n2)]\n    while(i<n1):\n        res[l]=a1[i]\n        l+=1\n        i+=1\n    while(j<n2):\n        res[l]=a2[j]\n        l+=1\n        j+=1\n    return res.sort()\n\ns1=[1,3,4,5]\ns2=[2,6,7,8]\nprint(merge(s1,s2))\n\n//another approach\n\ndef merge(a1,a2):\n    i=0\n    j=0\n    l=0\n    n1=len(a1)\n    n2=len(a2)\n    res=[0 for i in range(n1+n2)]\n    while(i<n1 and j<n2):\n        if(a1[i] == a2[j]):\n            res[l]=a1[i]\n            l+=1\n            res[l]=a2[j]\n            l+=1\n        if(a1[i]<a2[j]):\n            res[l]=a1[i]\n            i+=1\n            l+=1\n        else:\n            res[l]=a2[j]\n            j+=1\n            l+=1\n    while(i<n1):\n        res[l] =a1[i]\n        l+=1\n        i+=1\n    while(j<n2):\n        res[l] =a2[j]\n        l+=1\n        j+=1\n    return res\n\ns1=[1,3,4,5]\ns2=[2,6,7,8]\nprint(merge(s1,s2))",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "def merge(a):\n    n=len(a)\n    if(n%2!=0):\n        n=n-1\n    for i in range(0,n,2):\n        a[i],a[i+1] = a[i+1],a[i]\n    return a\n\ns=[13,19,23,34,57]\nprint(merge(s))"
  // },
  // "parimel333@gmail.com": {
  //   "Timestamp": "1/31/2023 21:36:15",
  //   "Email Address": "parimel333@gmail.com",
  //   "Enter your college name": "Vellalar college of Engineering and technology ",
  //   "Enter your contact number": "9500591790",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "0 L. Because it have already 25%",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "12100 votes",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "25 minutes ",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "A - 170km. B car - 135km.",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "552",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "1st string is an anagram.\n2nd one is not an anagram because it doesn't have same character and same lengths.",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": ""
  // },
  // "jeevithasivakami@gmail.com": {
  //   "Timestamp": "2/1/2023 21:47:41",
  //   "Email Address": "jeevithasivakami@gmail.com",
  //   "Enter your college name": "Tagore Institute of engineering and technology",
  //   "Enter your contact number": "8148007389",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "15litres",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "11570 voters",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "10minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "15km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "630Rs",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "class Main{\npublic static void main(String [] args){\nString str1 = \"poolo\"; String str2 = \"loop\";\nstr1 = str1.toLowerCase();\nstr2  = str2.toLowerCase();\nif(str1.length() == str2.length()){\nchar[] arr1 = str1.toCharArray();\nchar[] arr2 = str2.toCharArray();\n\nArrays.sort(arr1);\nArrays.sort(arr2);\n\nBoolean result = Arrays.equal(arr1,arr2);\nif(result){\nSystem.out.println(\"Strings are anagram\");\n}else{\nSystem.out.println(\"Strings are  not anagram\");\n}\n}else{\nSystem.out.println(\"Strings are not anagram\");\n}\n}\n}\n\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "public class Main{\npublic static void main(String [] args){\nint[] a = {1,5,8,9};\nint n1 = a.length();\nint[] b = {2,3,4,7,10};\nint n2 = b.length();\nint[] merge = new int[n1+n2];\nint i =0,j = 0 , k = 0,x;\nfor(int i = 0 ; i<n1;i++){\nSyste.out.println(a);\nfor(int j = 0 ; j , n2; j ++){\nSystem.out.println(b);\nwhile(i<n1 && j<n2){\nif(a[i]<b[j]){\nmerge[k++] = a[i++];\nelse{\nmerge[k++]= b[j++];\n}\nwhile(i<n1){\nmerge[k++] = a[i++];\nwhile(j<n2){\nmerge[k++] = b[j++];\n}\nfor(int x = 0 ; x<n1+n2;x++){\nSystem.out.println(merge[x]+\" \")\n}]}}}\n\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "public class Main{\npublic static void main(String [] args){\nint[] a = {13,19,23,34,57,8};\nint n = a.length();\nfor(int i = 0 ; i < n;i++){\n   System.out.println(a[i]);\nfor(int j = 0 ; j < n -1; j++){\nint temp = a[i];\na[i]= a[i+1];\na[i+1] = temp;\n}\nfor(int x = 0 ; x<n;x++){\n   System.out.println(a[x]);\n\n}}\n}}"
  // },
  // "shivangnegi01@gmail.com": {
  //   "Timestamp": "2/1/2023 21:27:35",
  //   "Email Address": "shivangnegi01@gmail.com",
  //   "Enter your college name": "Graphic Era University",
  //   "Enter your contact number": "9557641937",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "4",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "15433",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25 km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "564.7 ruppees",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "#include<bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    string string1;\n    string string2;\n\n    cin>>string1>>string2;\n\n    int count1[26] = {0}; //To count occurences of alphabets in strings\n    int count2[26] = {0};\n\n    for(char ch: string1) count1[ch-'a']++; //Assuming characters in strings are lowercase\n    for(char ch: string2) count2[ch-'a']++;\n    \n    for(int i=0;i<26;i++) {\n        if(count1[i]!=count2[i]) {\n            cout<<\"False\";\n            return 0;\n        }\n    }\n\n    cout<<\"True\";\n    return 0;\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "#include<bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    int n; //size of array1\n    cin>>n;\n\n    int m; //size of array2\n    cin>>m;\n\n    int arr1[n];\n    int arr2[m];\n\n    for(int i=0;i<n;i++) cin>>arr1[i];\n    for(int i=0;i<m;i++) cin>>arr2[i];\n\n    int ans[n+m]; //Answer array\n\n    int k = 0, i = 0, j = 0;\n    while(i<n && j<m) {\n        if(arr1[i]<=arr2[j]) ans[k++] = arr1[i++];\n        else ans[k++] = arr2[j++];\n    }\n\n    while(i<n) ans[k++] = arr1[i++];\n    while(j<m) ans[k++] = arr2[j++];\n\n    for(int i=0;i<n+m;i++) cout<<ans[i]<<\" \";\n\n    return 0;\n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "#include<bits/stdc++.h>\nusing namespace std;\n\nvoid solve(int arr[],int n) {\n    for(int i=1;i<n;i+=2) {\n        swap(arr[i-1],arr[i]);\n    }\n}\n\nint main() {\n    int n; \n    cin>>n;\n\n    int arr[n];\n    for(int i=0;i<n;i++) cin>>arr[i];\n\n    solve(arr,n);\n\n    for(int i=0;i<n;i++) cout<<arr[i]<<\" \";\n\n    return 0;\n}"
  // },
  // "gayujeevi01@gmail.com": {
  //   "Timestamp": "2/1/2023 21:33:03",
  //   "Email Address": "gayujeevi01@gmail.com",
  //   "Enter your college name": "VSBCETC",
  //   "Enter your contact number": "8870445606",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "2050",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25kms",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "3200",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "function areAnagram(str1,str2)\n{\nlet a = str1.length;\nlet b= str2.length;\nif(a!=b)\nreturn false;\nstr1.sort();\nstr2.sort()\nfor(let i=0;i<a;i++)\nif(str1[i] != str2[i])\nreturn false;\nreturn true;\n}\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": ""
  // },
  // "diksha04dk@gmail.com": {
  //   "Timestamp": "2/1/2023 21:35:53",
  //   "Email Address": "diksha04dk@gmail.com",
  //   "Enter your college name": "jain university",
  //   "Enter your contact number": "8840754160",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "24",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577.77",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "564.7",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "public class StringAnagramMain {\n \n    public static void main(String[] args) {\n \n        String word = \"java2blog\";\n        String anagram = \"aj2vabgol\";\n \n        System.out.println(\"java2blog and aj2vabgol are anagrams :\" + isAnagramUsingStringMethods(word, anagram));\n \n    }\n \n    public static boolean isAnagramUsingStringMethods(String word, String anagram) {\n        if (word.length() != anagram.length())\n            return false;\n \n        for (int i = 0; i < word.length(); i++) {\n            char c = word.charAt(i);\n            int index = anagram.indexOf(c);\n            // If index of any character is -1, then two strings are not anagrams\n            // If index of character is not equal to -1, then remove the chacter from the\n            if (index != -1) {\n                anagram = anagram.substring(0, index) + anagram.substring(index + 1, anagram.length());\n            } else\n                return false;\n        }\n        return anagram.isEmpty();\n    }\n \n}\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "  function mergeArrays(arr1, arr2, n1, n2, arr3) {\n      var i = 0, j = 0, k = 0;\n        \n      while (i < n1) {\n          arr3[k++] = arr1[i++];\n      }\n  \n      while (j < n2) {\n          arr3[k++] = arr2[j++];\n      }\n  \n      arr3.sort();\n  }\n  var arr1 = [1, 3, 5, 7];\n  var n1 = arr1.length;\n  var arr2 = [2, 4, 6, 8];\n  var n2 = arr2.length;\n  var arr3 = new Array(n1 + n2);\n  mergeArrays(arr1, arr2, n1, n2, arr3);\n  \n  console.log(\"Array after merging\");\n  for (var i = 0; i < n1 + n2; i++)\n      process.stdout.write(arr3[i] + \" \");\n  ",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "public int[] sortArrayByParityII(int[] A) {\n        for (int i = 0, j = 1; i < A.length; i += 2) {\n            while (j < A.length && A[j] % 2 == 1) { j += 2; } //find next odd-index item A[j] with even value.\n            if (A[i] % 2 == 1) { // if odd-index item A[i] is odd, swap it with A[j].\n                int t = A[i];\n                A[i] = A[j];\n                A[j] = t;\n                j += 2;\n            }\n        }\n        return A;\n    }"
  // },
  // "ramsiva060@gmail.com": {
  //   "Timestamp": "2/1/2023 21:47:58",
  //   "Email Address": "ramsiva060@gmail.com",
  //   "Enter your college name": "united institute of technology",
  //   "Enter your contact number": "9789492451",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "5L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "10703",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 mins",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "528",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "string1=\"loco\"\nstring2=\"cool\"\nfor i in range(len(string1)):\n    for j in range (len(string2)):\n        if i==j:\n         print(True)\n        else:\n         print(False)",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "arr1=[1,2,3]\narr2=[4,5,6]\narr1.extend(arr2)\narr3=arr1\nprint(arr3)",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "list1=['13','19','23','34','57','8']\nlist2=[]\nlist3=[]\nfor j in range(len(list1)):\n    if j%2==0:\n     list2.append(j)\n    else:\n        list3.append(j)\nprint(list2)\nprint(list3)"
  // },
  // "anandchitragar21@gmail.com": {
  //   "Timestamp": "2/1/2023 21:50:29",
  //   "Email Address": "anandchitragar21@gmail.com",
  //   "Enter your college name": "Jain University",
  //   "Enter your contact number": "7337657470",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "10 litters",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "16800",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "9 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25 km/hr",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "552 Rs",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "import java.util.*;\npublic class Check_anagram {\n\n\tpublic static void main(String[] args) {\n\t\tString str1=\"loco\";\n\t\tString str2=\"cool\";\n\t\tif(str1.length() ==str2.length()) {\n\t\t\tchar[] charArray1 = str1.toCharArray();\n\t\t\tchar[] charArray2 = str2.toCharArray();\n\t\t\t\n\t\tboolean result =Arrays.equals(charArray1, charArray2);\n\t\t\n\t\tif(result) {\n\t\t\tSystem.out.println(\"Both the strings are same\");\n\t\t}\n\t\telse {\n\t\t\tSystem.out.println(\"Both the strings are not same\");\n\t\t}\n\t\t}\n\t\n\t}\n\n\t}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "import java.util.*;\npublic class Even_odd_swap {\n\n\tpublic static void main(String[] args) {\n\t\tint arr[] = {13, 19, 23, 34, 57, 8};\n\t\tint even = 0, odd = 0;\n\tfor(int i=0; i<arr.length; i++) {\n\t\tif(i%2 ==0)\n\t\t\teven += arr[i];\n\t\telse \n\t\t\todd +=arr[i];\n\t}\n\tSystem.out.println(\"Even index position sum\" + even);\n\tSystem.out.println(\"odd index positions sum\" + odd);\n\n\t}\n\n}"
  // },
  // "vijaysanugonda@gmail.com": {
  //   "Timestamp": "2/1/2023 21:53:16",
  //   "Email Address": "vijaysanugonda@gmail.com",
  //   "Enter your college name": "National Institute of Technology Andhra Pradesh",
  //   "Enter your contact number": "7036862350",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "14 L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 minutes",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "560",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "def f(String1,String2):\n    if len(String1)!=len(String2):\n        return False\n    char_count1={}\n    char_count2={}\n    for char in String1:\n        if char in char_count1:\n            char_count1[char]+=1\n        else:\n            char_count1[char]=1\n    for char in String2:\n        if char in char_count2:\n            char_count2[char]+=1\n        else:\n            char_count2[char]=1\n    for k in char_count1.keys():\n        if char_count1[k]!=char_count2[k]:\n            return False\n    return True",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def f(arr1,arr2):\n    result=[]\n    i,j=0,0\n    while i<len(arr1) and j<len(arr2):\n        if arr1[i]<arr2[j]:\n            result.append(arr1[i])\n            i+=1\n        else:\n            result.append(arr2[j])\n            j+=1\n    while i<len(arr1):\n        result.append(arr1[i])\n        i+=1\n    while j<len(arr2):\n        result.append(arr2[j])\n        j+=1\n    return result",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "def f(arr):\n    for i in range(0,len(arr)-1,2):\n        arr[i],arr[i+1]=arr[i+1],arr[i]\n\n    return arr"
  // },
  // "imashishanshuman@gmail.com": {
  //   "Timestamp": "2/1/2023 21:56:34",
  //   "Email Address": "imashishanshuman@gmail.com",
  //   "Enter your college name": "DIT University, Dehradun",
  //   "Enter your contact number": "9546962100",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "0",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577.21",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "29.6",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "408",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "bool anagram(string a1, string a2){\n     int n1=a1.length();\n    int n2=a2.length();\nif(n1!=n2)  return false;\nfor(int i=0; i<n1; i++)\nif(a1[i] != a2[i]) return false;\nreturn true;\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "int merge(int a1[], int a2[]){\nint n1=a1.length();\nint n2=a2.length();\nfor(int i=n2-1; i>=0; i--){\nint j, last=a1[n1-1];\nfor(int j=n1-2;j>=0 && a1[j]>a2[i];j--}\narr1[j+1]=a1[j];\nif(last[i]>a2[i]){\na1[j+1]=a2[i];\na2[i]=last;\n}\n}\n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "int swap(int arr[], int n){\nint i=1;\nint j=2;\nwhile(n/2>1){\nint temp=arr[i];\narr[i]=arr[j];\narr[j]=temp;\ni=i+2;\nj=j+2;\n}"
  // },
  // "prakashpsupriyas@gmail.com": {
  //   "Timestamp": "2/1/2023 21:58:13",
  //   "Email Address": "prakashpsupriyas@gmail.com",
  //   "Enter your college name": "Sri Krishna Institute of Technology, Bangalore",
  //   "Enter your contact number": "9606253685",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "1L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20578",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25.5 Km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "564.7 INR",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "def ag(i):\n    list=[]\n    for j in i.lower():\n        list.append(j)\n        \n    dictionary = {}\n    for j in list:\n        if j not in dictionary:\n            dictionary[j]=1\n        else:\n            dictionary[j]=dictionary[j]+1\n\n    return dictionary\n    \nstring1 = input(\"string1\")\nstring2 = input(\"string2\")\nag1 = ag(string1)\nag2 =ag(string2)\n\nif ag1==ag2:\n    print(\"True\")\nelse:\n    print(\"False\")\n",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "def merge(a1,a2,n1,n2);\n   i=0 j=0 k=0\n    whil i< n1",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": ""
  // },
  // "dnvishnu12@gmail.com": {
  //   "Timestamp": "2/1/2023 21:58:30",
  //   "Email Address": "dnvishnu12@gmail.com",
  //   "Enter your college name": "PES University",
  //   "Enter your contact number": "8660342831",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "3L",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25km",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "565 Rs",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "import java.util.*;\npublic class Main{\n        public static void main(String[] args){\n                String s1 = \"loco\";\n                String s2 = \"cool\";\n                System.out.println(isAnagram(s1, s2));\n                String s3 = \"poolo\";\n                String s4 = \"loop\";\n                System.out.println(isAnagram(s3, s4));\n\n        }\n\n\n        public static boolean isAnagram(String s1 , String s2){\n                if(s1.length() != s2.length()){\n                        return false;\n                }\n                HashMap<Character, Integer> charCount = new HashMap<>();\n                for(int i=0 ; i<s1.length() ; i++){\n                        char c = s1.charAt(i);\n                        if(charCount.containsKey(c)){\n                                charCount.put(c, charCount.get(c) + 1);\n\n                        }\n                        else{\n                                charCount.put(c, 1);\n                        }\n                }\n                for(int i=0 ; i<s2.length() ; i++){\n                        char c = s2.charAt(i);\n                        if(charCount.containsKey(c)){\n                                charCount.put(c, charCount.get(c) - 1);\n                        }\n                        else{\n                                return false;\n                        }\n                }\n                for(int count : charCount.values()){\n                        if(count !=0){\n                                return false;\n                        }\n                }\n                return true;\n        }\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "import java.util.*;\npublic class Main{\n        public static void main(String[] args) {\n                Scanner sc = new Scanner(System.in);\n                int[] arr1 = {1, 3, 5, 10};\n                int[] arr2 = {2, 4, 6, 8};\n\n                int[] result = merge(arr1, arr2);\n                for(int i : result){\n                        System.out.print(i + \" \");\n                }\n\n        }\n\n        public static int[] merge(int[] arr1, int[] arr2){\n                int n = arr1.length;\n                int m = arr2.length;\n                int[] result = new int[n+m];\n                int i=0 ; \n                int j=0 ;\n                int k=0;\n                while(i<n && j<m){\n                        if(arr1[i]<arr2[j]){\n                                result[k++] = arr1[i++];\n\n                        }\n                        else{\n                                result[k++] = arr2[j++];\n                        }\n                }\n                while(i<n){\n                        result[k++] = arr1[i++];\n                }\n                while(j<m){\n                        result[k++] = arr2[j++];\n                }\n                return result;\n        }\n}",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": "import java.util.*;\npublic class Main{\n\tpublic static void main(String[] args) {\n\t\tint[] arr1= {13, 19, 23, 34, 57, 8};\n\t\tint[]arr2 = {12, 28, 33, 4, 9, 44, 66};\n\n\t\tchange(arr1);\n\t\tSystem.out.println();\n\t\tchange(arr2);\n\t\t\n\t}\n\n\tpublic static void change(int[] arr){\n\t\t\n\t\n\t\tfor(int i=0 ; i<arr.length ; i=i+2){\n\t\t\tif(i%2==0 && i+1<arr.length){\n\t\t\t\tint temp = arr[i];\n\t\t\t\tarr[i] = arr[i+1];\n\t\t\t\tarr[i+1] = temp;\n\t\t\t}\n\t\t}\n\n\t\tfor(int i=0 ; i<arr.length ; i++){\n\t\t\tSystem.out.print(arr[i] + \" \");\n\t\t}\n\t}\n}"
  // },
  // "jacsonnikil090@gmail.com": {
  //   "Timestamp": "2/1/2023 22:04:42",
  //   "Email Address": "jacsonnikil090@gmail.com",
  //   "Enter your college name": "Nandha Engineering College",
  //   "Enter your contact number": "7904995833",
  //   "Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?": "4 liters",
  //   "In an election between two candidates, 75% of the enrolled voters cast their votes. A candidate got 9260 votes which were 60% of the total votes cast. Find the total number of voters enrolled in the election.": "20577 voters",
  //   "Pipe A can fill in 20 minutes and Pipe B in 30 mins. If both of them work together, find the time taken to fill the tank": "12 mins",
  //   "Two cars A and B travel starts from the same point at the same time. If car-A travels at a speed of 55 km/hr and car-B travels at a speed of 65Kms/hr, what will be the distance between them after 150 minutes?": "25 kilometers",
  //   "Let us say there is a shopping center, which is running a flat 15% discount on every purchase a customer makes. Person named Naveen goes to the mall does the shopping and pays the final bill of 480 Rs INR after the discount. What would be the amount Naveen had to pay, if there was no discount running in the shopping center.": "",
  //   "Write a program to check if 2 strings are anagram or not. \nAnagram of 2 strings is true when both the strings are of \nsame length and contain same characters. You are not \nsupposed to use inbuilt functions like sort, compare and others\nInput : String1 = \"loco\", String2 = \"cool\"\nOutput : true\n\nInput : String1 = \"poolo\", String2 = \"loop\"\nOutput : false\n": "import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\nclass Anagram\n{\n\tpublic static void main (String[] args) throws java.lang.Exception\n\t{\n\t   Scanner sc= new Scanner(System.in);\n\t   String str1=sc.nextLine();\n\t   String str2=sc.nextLine();\n\t  \n\t   if(str1.length() == str2.length()){\n\t       char[] arr1= str1.toCharArray();\n\t       char[] arr2= str2.toCharArray();\n\t       \n\t       Arrays.sort(arr1);\n\t       Arrays.sort(arr2);\n\t       \n\t       Boolean answer = Arrays.equals(arr1,arr2);\n\t       \n\t       if(answer){\n\t           System.out.println(\"True\");\n\t       }\n\t       else{\n\t           System.out.print(\"False\");\n\t       }\n\t   }\n\t   else{\n\t       System.out.print(\"False\");\n\t   }\n\t}\n}",
  //   "Merge 2 sorted arrays such that resultant array should be sorted, you are not supposed to use in-built functions.\n": "import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\n/* Name of the class has to be \"Main\" only if the class is public. */\nclass Anagram\n{\n\tpublic static void main (String[] args) throws java.lang.Exception\n\t{\n\t   int arr1[]={1,3,5,7};\n\t   int arr2[]={2,4,6,8};\n\t   int l1=arr1.length;\n\t   int l2=arr2.length;\n\t   \n\t   int arr3[]=new int[l1+l2];\n\t   mergeArrays(arr1,arr2,l1,l2,arr3);\n\t   for(int i=0;i<l1+l2;i++){\n\t       System.out.print(arr3[i]+\" \");\n\t   }\n\t} \n\t   public static void mergeArrays(int arr1[], int arr2[], int l1, int l2, int arr3[]){\n\t       int i=0;\n\t       int j=0;\n\t       int k=0;\n\t       while(i<l1){\n\t           arr3[k++]=arr1[i++];\n\t       }\n\t        while(j<l2){\n\t           arr3[k++]=arr2[i++];\n\t       }\n\t        for (int i=0;i<arr3.length;i++){\n\t           for (int j=0;j<arr3.length;j++){\n\t            int temp=0;\n\t            if(arr3[i]>arr[j]){\n\t                temp=arr3[i];\n\t                arr3[i]=arr3[j];\n\t                arr3[j]=temp;\n\t            }\n\t        } \n\t        }\n\t        System.out.println(arr[i]);\n\t   \n\t}\n}\n",
  //   "Write a program to swap elements of odd index with even index in an array\n\nInput : [13 19 23 34 57 8]\nOutput : [19 13 34 23 8 57]\n\nInput : [12 28 33 4 9 44 66]\nOutput : [28 12 4 33 44 9 66]": ""
  // }}
}


  function definePrompt(q, a) {
    if(a=="" ){
      return `Act as a evaluator \n Question: ${q}\n Answer: no answer provided \n Is the ans correct? Just give me true or false.`
    }else{
      return `Act as a evaluator \n Question: ${q}\n Answer: ${a}\n Is the ans correct? Just give me true or false.`
    }
    //console.log(q,index)
      //return "Q :" + q +". "+ '/n' +"Ans:" + a + '/n' + "Is the ans is correct? Just give true or false.I need only boolean value";
  }
  

const keyedPrompts = {};

Object.keys(mainData).forEach(async (item, index) => {
  const data = { ...mainData[item] };
  delete data["Timestamp"];
  delete data["Email Address"];
  delete data["Enter your college name"];
  delete data["Enter your contact number"];

  let count = 0; // Initialize count for each key
  
  for (const key of Object.keys(data)) {
    const q = key;
    const a = data[key];

    if (q.includes("coding question")) {
      const prompt = definePrompt(q, a);

      const response = await axios
        .post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
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
                "Bearer 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",
            },
          }
        )
        .then((res) => {
          //console.log(`"question:"${q}\n answer:${a}\n gptans:${res.data.choices[0].message.content}`)

          console.log(res.data.choices[0].message.content.toLowerCase(),item,'gpt res1')
          if (res.data.choices[0].message.content.toLowerCase()==='true') {
            keyedPrompts[item] = count + 1;
            //console.log(keyedPrompts[item] ,res.data.choices[0].message.content.toLowerCase(),'gpt res')
            //console.log(keyedPrompts[item],keyedPrompts, "prompts");
          }
        });

      count++; // Increment count for each key
    }
  }
  //console.log(keyedPrompts)
});


  // let count = 0
  // const keyedPrompts = {};

  // Object.keys(mainData).forEach((item,index) => {
  //   const data = { ...mainData[item] };
  //   delete data["Timestamp"];
  //   delete data["Email Address"];
  //   delete data["Enter your college name"];
  //   delete data["Enter your contact number"];
  
  //   Object.keys(data).forEach(async (key) => {
  //     const q = key;
  //     const a = data[key];
  //     if(q.includes('coding question')){
  //       const prompt = definePrompt(q, a);
  
  //     const response = await axios.post(
  //       "https://api.openai.com/v1/chat/completions",
  //       {
  //         model: "gpt-4",
  //         temperature: 0,
  //         messages: [
  //           {
  //             role: "user",
  //             content: prompt,
  //           },
  //         ],
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer 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",
  //         },
  //       }
  //     ).then((res=>{
  //       if(res){
  //         keyedPrompts[item] = count + 1;
  //         console.log(keyedPrompts,'promps')
  //       }
  //     }))
  //     }
  //   });
  // });


  let candidateData = [
    {
    "email": "pardhulekkala485@gmail.com",
    "Timestamp":"1/16/2023 11:54:02",
    "questions":[
        {
            "question":"Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?",
            "answer": 10
        },
        {
            "question":"Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?",
            "answer": 10
        },
        {
            "question":"Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?",
            "answer": 10
        }
    ]
},
{
    "email": "tarunteja@gmail.com",
    "Timestamp":"1/31/2023 21:36:15",
    "questions":[
        {
            "question":"Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?",
            "answer": 10
        },
        {
            "question":"Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?",
            "answer": 10
        },
        {
            "question":"Let's say we have a 60L mixture of Vinegar and Water mixed in the ratio of 1:4 respectively. How many liters of vinegar should be added to this mixture, so that the resulting mixture contains 25% of vinegar in it?",
            "answer": 10
        }
    ]
}
]
