import React, { useState } from "react";

function Tdee() {
  const [weight, setWeight]=useState()
  const [height, setHeight]=useState()
  const [age, setAge]=useState()
  const [gender, setGender]=useState("0")
  const [activityLevel, setActivityLevel]=useState("0")
  const [tdee, setTdee]=useState()
  const [bmi, setBmi]=useState()

  console.log(weight, height, age, gender, activityLevel);
  function calculateTDEE(weight, height, age, gender, activityLevel) {
    const bmr = gender === 'Male'
      ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    const activityFactor = getActivityFactor(activityLevel);
    const tdee= Math.round(bmr * activityFactor);
    setTdee(tdee)
  }
  
  function getActivityFactor(activityLevel) {
    switch (activityLevel) {
      case 'Sedentary (little to no exercise + work a desk job)':
        return 1.2;
      case 'Lightly Active (light exercise 1-3 days / week)':
        return 1.375;
      case 'Moderately Active (moderate exercise 3-5 days / week)':
        return 1.55;
      case 'Very Active (heavy exercise 6-7 days / week)':
        return 1.725;
      case 'Extremely Active (very heavy exercise, hard labor job, training 2x / day)':
        return 1.9;
      default:
        return 1.2;
    }
  }
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
              value={weight}
              onChange={e=> setWeight(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="height"
              placeholder="Height"
              value={height}
              onChange={e=> setHeight(e.target.value)}
            />
          </div>

          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="age"
              placeholder="Age"
              value={age}
              onChange={e=> setAge(e.target.value)}
            />
          </div>

          <div class="col-md-6">
            <select id="gender" class="form-select" value={gender} onChange={e=> setGender(e.target.value)}>
              <option selected value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </div>

          <div class="col-md-12">
            <select id="Activity" class="form-select" value={activityLevel} onChange={e=> setActivityLevel(e.target.value)}>
              <option selected value="0">
                Sedentary (little to no exercise + work a desk job)
              </option>
              <option value="1">Lightly Active (light exercise 1-3 days / week) </option>
              <option value="2">
                Moderately Active (moderate exercise 3-5 days / week)
              </option>
              <option value="3">Very Active (heavy exercise 6-7 days / week) </option>
              <option value="4">
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
              onClick={()=>calculateTDEE(weight, height, age, gender, activityLevel)}
            >
              Calculate TDEE
            </button>
          </div>
        </form>
      </div>

      <div className="tdee-result">
        
      </div>
    </div>
  );
}

export default Tdee;
