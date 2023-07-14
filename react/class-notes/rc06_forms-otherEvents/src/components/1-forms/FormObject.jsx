import { useState } from "react"

const FormObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  //? Destr.
  const { username, email, password } = formData

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(`
      username:${username}
      email:${email}
      password:${password}
    `)

    setFormData({
      username: "",
      email: "",
      password: "",
    })
  }

  const handleFormData = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    // console.log(e.target.id)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">FORM OBJECT IN REACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            //? OnChange event'ı input degeri her degistiginde tetiklenir. Biz de yazdıgımız event handler araciligi ile State'i guncelleyebilmis oluruz.
            onChange={handleFormData}
            value={username}
            name="username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleFormData}
            value={email}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleFormData}
            value={password}
            name="password"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormObject
