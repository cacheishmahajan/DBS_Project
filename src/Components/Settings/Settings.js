import React from 'react'

const Settings = () => {
  return (
    <div>
    <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="age">Age:</label>
                <input type="text" name="age" />
                <label htmlFor="name">Breed:</label>
                <input type="text" name="breed" />
                <input type="submit" value="submit" />
    </form>
    </div>
  )
}




export default Settings;
