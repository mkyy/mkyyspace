import { useForm } from '@formspree/react';
import { FormForm } from './style';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('moqrkkkq');
  if (state.succeeded) {
    return <div> <img src="icons/v.png" alt="" /> <p>Obrigado pela mensagem. ;)</p> </div>;
  }
  return (
    <FormForm>
      <form onSubmit={handleSubmit}>

        <input id='name' type="text" name='name' placeholder='{ Name here }'/>

        <input id="email" type="email" name="email" placeholder='{ Email here }'/>

        <textarea name="msg" id="msg" cols="30" rows="10" placeholder='{ Your friendly message here ;) }'></textarea>

        <button type="submit" disabled={state.submitting}>Enviar</button>

      </form>
    </FormForm>
  )
}