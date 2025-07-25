import React from "react";
import "./Formstyle.css";

const Form = () => {
  // 7c35f07c-a4c1-4ba1-aec9-e4ebfdc64d0a

  const [result, setResult] = React.useState("");

  const SendMessage = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c35f07c-a4c1-4ba1-aec9-e4ebfdc64d0a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks for reaching me out.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="form" onSubmit={SendMessage}>
      <form action="">
        <label htmlFor="">Name :</label>
        <input type="text"></input>
        <label htmlFor="">E-mail :</label>
        <input type="email"></input>
        <label htmlFor="">Message :</label>
        <textarea rows={5} placeholder="Type your text here" />
        <button className="btn">Submit</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Form;
