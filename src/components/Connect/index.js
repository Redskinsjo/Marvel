import React, { useState } from 'react';
import axios from 'axios';

const Connect = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios({
        url: 'https://backendmarvel.herokuapp.com/signin',
        method: 'post',
        data: {
          email,
          password,
        },
      });
      if (response.status === 200) {
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="super-container-connect">
      <div className="container-connect">
        <form onSubmit={() => {}}>
          <h3>Sign in</h3>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Connect;
