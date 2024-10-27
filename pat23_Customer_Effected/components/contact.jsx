import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
  const params = useParams()//The useParams hook allows you to access the dynamic parameters in the URL. This is useful when you want to retrieve values that are part of the route, such as IDs or slugs.
  //params will be an object where the keys are the parameter names defined in the route, and the values are the actual dynamic parts of the URL.
  console.log(params);
  return <h1>Contact Us</h1>
}