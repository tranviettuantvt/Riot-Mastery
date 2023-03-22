import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { removeRecipe } from "../api/RecipeService";
import { db } from "../firebase";

function AdminRecipeItem({
  handleEdit,
  trigger,
  setTrigger,
  user_id,
  title,
  image,
  material,
  origin,
  time,
  rate,
  step,
  ingredient_id,
}) {
  const [author, setAuthor] = useState();
  const handleDelete = (id) => {
    removeRecipe(id)
      .then((res) => setTrigger(!trigger))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    // get user from firebase through uid
    const userRef = collection(db, "users");
    const q = query(userRef, where("uid", "==", user_id));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setAuthor(userData);
        }
      })
      .catch((error) => {
        console.log("Error retrieving user document:", error);
      });
  }, [user_id]);

  return (
    <tr>
      <td>
        <img style={{ width: "100%" }} src={image} alt="" />
      </td>
      <td>{title},</td>
      <td>
        <td>
          <img src={author?.photoURL} alt="" />
          <span>{author?.displayName}</span>
        </td>
      </td>
      <td>{material}</td>
      <td>{origin}</td>
      <td>{time}</td>
      <td>{rate}</td>
      <td>{step}</td>
      <td>
        <span
          onClick={() => handleEdit(ingredient_id)}
          class="edit"
          title="Edit"
          data-toggle="tooltip"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <span
          class="delete"
          title="Delete"
          data-toggle="tooltip"
          style={{ color: "red" }}
          onClick={() => handleDelete(ingredient_id)}
        >
          <i class="fa-solid fa-trash"></i>
        </span>
      </td>
    </tr>
  );
}

export default AdminRecipeItem;
