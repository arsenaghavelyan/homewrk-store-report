import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Products'
import Result from './TotalCount'


const shopArr = [
  { id:1, name:"Computer", date:"10.06.2023", count:5, price:130000 },
  { id:2, name:"Phone", date:"10.05.2023", count:7, price:15000 },
  { id:3, name:"Television", date:"23.05.2023", count:5, price:100000 },
  { id:4, name:"Watch", date:"01.01.2023", count:60, price:10000 },
  { id:5, name:"VR glasses", date:"13.02.2023", count:3, price:100000 },
  { id:6, name:"PlayStation 5", date:"23.05.2022", count:10, price:360000 },
  { id:7, name:"PlayStation 4", date:"13.03.2023", count:20, price:150000 },
  { id:8, name:"Iphone 14", date:"02.02.2023", count:2, price:120000 },
  { id:9, name:"Ipad", date:"20.11.2022", count:4, price:70000 },
  { id:10, name:"Apple Watch", date:"13.09.2021", count:8, price:15000 },
  { id:11, name:"Samsung s23", date:"31.12.2021", count:4, price:190000 },
  { id:12, name:"Camera", date:"01.06.2023", count:2, price:110000 },
  { id:13, name:"Mouse", date:"16.10.2020", count:20, price:3000 },
  { id:14, name:"Airpods", date:"23.05.2022", count:13, price:5000 },
  { id:15, name:"Keyboard", date:"03.10.2023", count:17, price:7000 },
]
let totalResult = 0
let res = shopArr.reduce((total,el)=>{
  return total += (el.count * el.price)
},0)
totalResult += res

function App() {
  return (
    <div className='container'>
      <h1>Last month's store report</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            shopArr.map((el)=>{
              return <Product key={el.id} id={el.id} name={el.name} date={el.date} count={el.count} price={el.price}/>
            })
          }
        </tbody>
        <tfoot>
            <Result totalResult={totalResult}/>
        </tfoot>
      </table>
    </div>
  )
}

export default App
