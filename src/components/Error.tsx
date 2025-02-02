import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>The file you try to contact is not exist!</h1>
      <p>
        Back to{" "}
        <Link to='/'>
          <span className='text-blue-500 underline'>Home</span>
        </Link>
      </p>
    </div>
  );
};

export default Error;
