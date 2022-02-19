import React, { useState } from "react";

import TextInput from "./components/TextInput";
import Button from "./components/Button";
import "./App.css";
import { render } from "@testing-library/react";


const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {
    
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.99) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.99) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";      
    }
  };

  return (
    
   
    <div className="App">
    <div className="container">
      <div
        style={{
          display: "block",
          width: "100%",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >

        
        <div className="heading">
          
          
        <h1> <u>Welcome to our BMI Calculator!</u> </h1>
        Body Mass Index (BMI) Calculator
        </div>
        <p className="paragraph">
       <strong> How to calculate Body Mass Index:</strong>
       <hr class= "w-25 "/>
        Body Mass Index is a simple calculation using a person’s height and weight.<br></br>
         The formula is BMI = kg/m<sup>2</sup> where kg is a person’s weight in kilograms and m<sup>2</sup> is their height in metres squared.<br/>
         A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years.
        </p>
        <p>
        <b>Who shouldn't use a BMI calculator</b><br/>
        <hr class= "w-25 "/>
BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children. This is because BMI does not take into account whether the weight is carried as muscle or fat, just the number. Those with a higher muscle mass, such as athletes, may have a high BMI but not be at greater health risk. Those with a lower muscle mass, such as children who have not completed their growth or the elderly who may be losing some muscle mass may have a lower BMI.
 During pregnancy and lactation, a woman's body composition changes, so using BMI is not appropriate.
        </p>
        
      </div>
    
      <p className="para2">
        <b>History</b>
   
      <div className="image">
     
   
       <div className="img2">
       <img src="https://media.istockphoto.com/photos/fat-loss-picture-id961999460?k=20&m=961999460&s=612x612&w=0&h=Szz36WOlorSn_3cxD6wXM-CJtWZVeJfssww8P2SIm2U="></img><br/>
       </div>
      </div>
      <hr class= "w-25 "/>
      Adolphe Quetelet, a Belgian astronomer, mathematician, mathematician, and sociologist, laid the foundation for BMI between 1830 and 1850 as he developed what he called "social physics".
      The modern term "body mass index" (BMI) of a person's average body weight and square footage was coined in a paper published in the July 1972 issue of Ancel Keys' Journal of Chronic Diseases and others.
      In the paper, Keys argued that what he called BMI "... if not completely satisfactory, at least as good as any other related weight index as an indicator of obesity"
<br/>
Interest in the measure of body fat has been linked to an increase in obesity in prosperous Western societies.
The keys clearly judge BMI as appropriate for human studies and are not suitable for individual testing.
 However, because of its simplicity, it is now widely used in early diagnosis.
 Additional metrics, such as the waist circumference, can be very useful.
The BMI is universally expressed in kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.
 If pounds and inches are used, a conversion factor of 703 (kg/m<sup>2</sup>)/(lb/in<sup>2</sup>) must be applied. When the term BMI is used informally, the units are usually omitted.
<br/>
BMI provides a simple numerical measure of a person's size or height, allowing health professionals to discuss weight problems in a meaningful way with their patients.
 BMI was designed to be used as a simple way to differentiate the number of sedentary (physically inactive) people, by moderate body composition. For such people, the price recommendations from 2014 are as follows: BMI from 18.5 to 25 kg / m <sup> 2 </sup> may indicate total weight, a BMI below 18.5 suggests that man weighs less,
  a number from 25 to 30 may indicate that a person is overweight, and a number 30 or higher indicates that the person is obese. percentage of body fat
      </p>
     
      <p><b>Consequences of elevated level in adults<hr class= "w-25 "/></b>
      The BMI ranges are based on the relationship between body weight and disease and death.
       Overweight and obese individuals are at an increased risk for the following diseases:
       <div className="img1">
       <img src="https://media.istockphoto.com/photos/body-mass-index-written-on-a-notepad-sheet-picture-id528072248?b=1&k=20&m=528072248&s=170667a&w=0&h=ekzfEXFn0C4NVMww8x1vQw3UIGvkS8qmIraIIdarQk0="></img><br/>
       </div>
<ul type="disc">
<li><a href="https://en.wikipedia.org/wiki/Coronary_artery_disease">Coronary artery disease</a></li>
<li><a href="https://en.wikipedia.org/wiki/Dyslipidemia">Dyslipidemia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Type_2_diabetes">Type 2 diabetes</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gallbladder_disease">Gallbladder disease</a></li>
<li><a href="https://en.wikipedia.org/wiki/Hypertension">Hypertension</a></li>
<li><a href="https://en.wikipedia.org/wiki/Osteoarthritis">Osteoarthritis</a></li>
<li><a href="https://en.wikipedia.org/wiki/Sleep_apnea">Sleep apnea</a></li>
<li><a href="https://en.wikipedia.org/wiki/Stroke">Stroke</a></li>
<li><a href="https://en.wikipedia.org/wiki/Infertility">Infertility</a></li>
<li>At least 10 cancers, including <a href="https://en.wikipedia.org/wiki/Endometrial_cancer">endometrial</a> , 
<a href="https://en.wikipedia.org/wiki/Breast_cancer">breast</a>, and <a href="https://en.wikipedia.org/wiki/Colorectal_cancer">colon cancer</a></li>
<li>Epidural <a href="https://en.wikipedia.org/wiki/Lipomatosis"> lipomatosis</a></li>
</ul>
Among people who have never smoked, overweight/obesity is associated with 51% increase in mortality compared with people who have always been a normal weight.
      </p>
<p>
<b>To calculate your BMI enter the values below:<br/></b>

</p>
      <div className="row">
        <TextInput
          label="Height :"
          placeholder="(Enter height in cm)"
          handleChange={handleHeightChange}
          value={height}
        />
      </div><br/>
      <div className="row">
        <TextInput
          label="Weight :"
          placeholder="(Enter weight in kg)"
          handleChange={handleWeightChange}
          value={weight}
          
        />
        
      </div>
      <br/>
      
      <button type="button" onClick={computeBmi} className="btn btn-outline-success">CALCULATE </button>
      <hr/>
      <div className="row">
        {
          isNaN(bmi)?null:<h4>Your BMI (body mass index) is  <b>{bmi}</b> </h4> 
        }
        
      </div>
      <div className="row">{
      isNaN(bmi)?null: <h4>This is considered as :) <i>{bmiClass}</i></h4>
         }
      </div>

      

      <footer id="footer">
  <p className="text-center bg-dark text-white mb-5">&Copyright 2021 | BMI calculator|
    </p>
  
</footer>
    </div>
    </div>

    
    
  );
};
export default App;
