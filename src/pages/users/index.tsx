import axios from 'axios';
import cheerio from 'cheerio';
import Layout from '../../layout';
import { FunctionComponent } from "react";
interface IUsers {
  id: number,
  name: string
}


export default function Users(props: any){
  return (
    <>
      <h1>Users</h1>
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json();
  
  const url = 'https://learn.javascript.ru/'
  axios.get(url)
  .then(response => {
    // console.log(response.data)

    let getData = (html) => {
      let data = [];
      let title = '';
      let description = '';
      
      const $ = cheerio.load(html);
      title = $('title').text();
      description = $("meta[name='description']").attr('content');
  
      // $('table.itemlist tr td:nth-child(3)').each((i, elem)=>{
      //   data.push({
      //     title: $(elem).text(),
      //     link: $(elem).find('a.storylink').attr('href')
      //   })
      // })

      console.log('Title: ', title, '\n', 'Description: ', description);

    }
    
    getData(response.data);

  })
  .catch(error => {console.log('Error parser: ', error)})

   return {
     props: {
       users: users
     }
   }
}