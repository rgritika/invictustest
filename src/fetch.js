import {useState , useEffect} from 'react'
import axios from 'axios'
export default function Fetch(props) {
  const [text , setText] = useState('')
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/invictustech/test/main/README.md')
    .then(res => {
      setText(res.data)
    }).catch(err => console.log('err' ,err))
  }, [])

  function wordFreq(string) {
    var words1 = string.replace(/[.,-;]/g, '').toUpperCase().split(/\s/);
    var words = words1.filter(function (el) {
        return el !== '';
      });
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}



const array = [{}]
array.push(wordFreq(text));



const resultArray = [{}]

for(const item of Object.entries(array[1])) {

  const newObj = {
    word:'',
    count:0
  }
  newObj.word = item[0]
  newObj.count = item[1];
  resultArray.push(newObj);
}
function compare( a, b ) {
    if ( a.count > b.count ){
      return -1;
    }
    if ( a.count < b.count ){
      return 1;
    }
    return 0;
}
  
resultArray.sort( compare );
var r = [{}]
var num = parseInt(props.number) + 1
if(num>resultArray.length){
    return(
        <p>Invalid value! Exceeded total number of words. Enter value ≤  {resultArray.length - 1}</p>
    )
}
else if(num<=0){
    return(
        <p>Invalid value! N cannot be negative</p>
    )
}
else if(num===1){
    return(
      <p> </p>
    )
}
else if(Number.isNaN(num)){
  return(
      <p>Enter any number, input field cannot be empty.</p>
  )
}
r = resultArray.slice(1,num);
const TableList = ({word , count}) => {
   return (
     <tr>
       <td>{word}</td>
       <td>{count}</td>
      </tr>
   )
} 


  return (
    <div className="App">
      <table>
        <tbody>
        <tr id="header">
        <th>Word</th>
        <th>Count</th>
      </tr>
      {r.map((item , index) => (<TableList word={item.word} key={index.toString()} count={item.count} />))}
        </tbody>
      </table>
    </div>
  );
}
