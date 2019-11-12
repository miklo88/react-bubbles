import React, { useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  
  //console.log(colorToEdit);
  const [newColor, setNewColor] = useState(initialColor)
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
// coming from the api which is located in the server.js file
    // where is is saved right now? server.js file
  axiosWithAuth()
  .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
  .then(res => {
    const newColors = colors.map(color => {
      if (color.id === colorToEdit.id) {
        return res.data;
      }
      return color;
    });
    updateColors(newColors)
  })
  .catch(error => console.log(error))
  // for the form to go away after editing.
  setEditing(false)
};

const addColor = e => {
  e.preventDefault()
  axiosWithAuth()
    .post(`/api/colors/`, newColor)
    .then(res => {
      // where the new color is added to the api and maintained.
      updateColors(res.data)
      console.log(res.data)
    })
    .catch(error => console.log(error))
}

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/api/colors/${color.id}`)
      .then(res => {
        const newColors = colors.filter(c => c.id !== color.id)
        updateColors(newColors)
      })
      .catch(error => console.log(error))
  };


  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

      {/* <div className="spacer" /> */}
      {/* stretch - build another form here to add a color */}
      <form onSubmit={addColor}>
          <legend>add color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setNewColor({ ...newColor, color: e.target.value })
              }
              value={newColor.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setNewColor({
                  ...newColor,
                  code: { hex: e.target.value }
                })
              }
              value={newColor.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
    </div>
  );
  };

export default ColorList;
