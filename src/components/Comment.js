
import { useForm } from 'react-hook-form';

export  default function Comment({_id,entity}) {

  const {register, handleSubmit,  errors } = useForm();
  const counter = 1;
  const SocialType = "comment";
  const onSubmit = (data) =>{ 
      console.log(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <textarea name='text' ref={register({ required: true })}>
            {errors.text && <p>text of comment is required.</p>}
        </textarea> 
      <input {...register('socialType', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      
      <input type="submit" />
    </form>
  );
}