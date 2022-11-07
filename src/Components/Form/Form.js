import './Form.css'

export default function Form(){
    return <form action="" className="form-items">
    <h2>Create a new card</h2>
    <label htmlFor="question-area">Question</label>
    <textarea
      name="question"
      data-js="q-input"
      id="question-area"
      placeholder="Leave here a question..."
      cols="30"
      rows="10"
    ></textarea>
    <label htmlFor="answer-area">Answer</label>
    <textarea
      name="answer"
      data-js="a-input"
      id="answer-area"
      placeholder="Please let us know the answer..."
      cols="30"
      rows="10"
    ></textarea>
    <button type="submit" className="button__yellow">Submit</button>
  </form>
        
    
}