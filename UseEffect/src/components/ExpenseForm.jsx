import React, {useRef, useEffect,useState } from 'react'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })

  const titleRef=useRef();
  const categoryRef=useRef();
  const amountRef=useRef();

  const handleSubmit=(e)=>{
    e.preventDefault()
    setExpense((prevState)=>{
      [...prevState,{
        title:titleRef.current.value,
        category:categoryRef.current.value,
        amount:amountRef.current.value,
        id:crypto.randomUUID()
      },
  ]})
  }

  // const myRef=useRef(0);
  // let myNum=0;

    // useEffect(() => {
    //   // console.log(myRef.current);
    //   myRef.current.style.backgroundColor='red'
    // }, )
    
  
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setExpenses((prevState) => [
  //     ...prevState,
  //     { ...expense, id: crypto.randomUUID() },
  //   ])
  //   setExpense({
  //     title: '',
  //     category: '',
  //     amount: '',
  //   })
  // }
  useEffect(() => {
    console.log('rendering')
  })

  return (
    <>
    {/* <button onClick={()=>{
      myRef.current=myRef.current+1
      myNum=myNum+1
      console.log(myRef);
      console.log(myNum);
    }} ref={myRef}/> */}
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) =>
            setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
    </>
  )
}