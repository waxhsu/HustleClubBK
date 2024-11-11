import axios from 'axios';
import { EVENT_info } from '../../const.js';

const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const SHEET_NAME = process.env.REACT_APP_SHEET_NAME;

export const fetchData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?alt=json&key=${API_KEY}`;


    try {
        const response = await axios.get(url);
        const columns = response.data.values;

        // Map the columns to your desired structure (skipping the header column)
        const records = columns.slice(1).map((column) => ({
            id: column[0],
            date: column[1],
            special: column[2] === 'TRUE',
            name: column[3],
            rich: column[4],
            classTime: column[5],
            sessionTime: column[6],
            location: column[7],
            price: column[8],
            src: column[9],
        }));

        return records;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return [];
    }
};

