// import axios from 'axios';

// const SHEET_ID = `1oLbVgmA2kOVRmWljWe3fOOd49Fn7RbIi10UFfHatZ_k`;


// export const fetchData = async () => {
//     const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
//     // const headers = { Authorization: `Bearer ${API_KEY}` };
  
//     try {
//       const response = await axios.get(url);
//       const jsonData = JSON.parse(response.data.substring(47).slice(0, -2));
  
//       // Assuming your data starts from the first row with headers
//       const records = jsonData.table.rows.map((row) => ({
//         id: row.c[0]?.v,
//         date: row.c[1]?.v,
//         special: row.c[2]?.v === 'TRUE',
//         name: row.c[3]?.v,
//         rich: row.c[4]?.v,
//         classTime: row.c[5]?.v,
//         sessionTime: row.c[6]?.v,
//         location: row.c[7]?.v,
//         price: row.c[8]?.v,
//       }));
  
//       return records;
//     } catch (error) {
//       console.error('Error fetching data from Google Sheets', error);
//       return [];
//     }
//   };

import axios from 'axios';

const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const SHEET_NAME = process.env.REACT_APP_SHEET_NAME;



export const fetchData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?alt=json&key=${API_KEY}`;


    try {
        const response = await axios.get(url);
        const rows = response.data.values;

        // Map the rows to your desired structure (skipping the header row)
        const records = rows.slice(1).map((row) => ({
            id: row[0],
            date: row[1],
            special: row[2] === 'TRUE',
            name: row[3],
            rich: row[4],
            classTime: row[5],
            sessionTime: row[6],
            location: row[7],
            price: row[8],
            src: row[8],
        }));

        return records;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return [];
    }
};
