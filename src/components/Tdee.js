import React from "react";

function Tdee() {
  return (
    <div className="container" style={{ padding: "3.5rem" }}>
      <h2 className="text-center text-success mb-4" style={{ color: "#022559" }}>HOW STRONG YOU ARE ?</h2>

      <a className="tdee-button" type="button" href="#tdeeCal">
        <i class="fa-solid fa-film"></i>
      </a>
      <div className="tdee" id="tdeeCal">
        <form class="row gx-5 gy-4">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="weight"
              placeholder="Weight"
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="height"
              placeholder="Height"
            />
          </div>

          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="age"
              placeholder="Age"
            />
          </div>

          <div class="col-md-6">
            <select id="gender" class="form-select">
              <option selected>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div class="col-md-12">
            <select id="Activity" class="form-select">
              <option selected>
                Sedentary (little to no exercise + work a desk job)
              </option>
              <option>Lightly Active (light exercise 1-3 days / week) </option>
              <option>
                Moderately Active (moderate exercise 3-5 days / week)
              </option>
              <option>Very Active (heavy exercise 6-7 days / week) </option>
              <option>
                Extremely Active (very heavy exercise, hard labor job, training
                2x / day)
              </option>
            </select>
          </div>

          <div class="col-md-12 text-center mt-5">
            <button
              type="submit"
              class="btn btn-success d-block"
              style={{ width: "100%", padding: "4px 0", fontSize: "1.6rem" }}
            >
              Calculate TDEE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tdee;
