import { useState } from 'react'


function App() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  password: ""
}) 
  const [errors, setErrors] = useState({
  name: "",
  email: "",
  password: ""
})
function handleChange(e) {
  const name = e.target.name
  const value = e.target.value

  setForm(prev => ({
    ...prev,
    [name]: value
  }))
}
function validate() {
  const newError= {
    name : "",
    email : "",
    password : ""
  }
  if(form.name.trim() == ""){
    newError.name = "name is required field"
  }
   if(!form.email.includes("@")){
    newError.name = "Invalid E-mail"
  }
   if(form.password.length<=6){
    newError.name = "password should be of 6 letters"
  }
  return newError
}
function handleSubmit(e) {
  e.preventDefault()

  const validationErrors = validate()
  setErrors(validationErrors)

  const isValid = Object.values(validationErrors).every(
    error => error === ""
  )

  if (isValid) {
    console.log("Form submitted successfully")
  }
}

  return (
    <>
      <form onSubmit={handleSubmit}>
  <div>
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      value={form.name}
      onChange={handleChange}
    />
    {errors.name && <p>{errors.name}</p>}
  </div>

  <div>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      value={form.email}
      onChange={handleChange}
    />
    {errors.email && <p>{errors.email}</p>}
  </div>

  <div>
    <input
      type="password"
      name="password"
      placeholder="Enter your password"
      value={form.password}
      onChange={handleChange}
    />
    {errors.password && <p>{errors.password}</p>}
  </div>

  <button type="submit">Submit</button>
</form>
    </>
  )
}

export default App
