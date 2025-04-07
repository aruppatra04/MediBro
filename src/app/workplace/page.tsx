"use client";

import React, { JSX, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";

const SYMPTOMS_LIST = [
  "itching",
  "skin_rash",
  "nodal_skin_eruptions",
  "continuous_sneezing",
  "shivering",
  "chills",
  "joint_pain",
  "stomach_pain",
  "acidity",
  "ulcers_on_tongue",
  "muscle_wasting",
  "vomiting",
  "burning_micturition",
  "spotting_ urination",
  "fatigue",
  "weight_gain",
  "anxiety",
  "cold_hands_and_feets",
  "mood_swings",
  "weight_loss",
  "restlessness",
  "lethargy",
  "patches_in_throat",
  "irregular_sugar_level",
  "cough",
  "high_fever",
  "sunken_eyes",
  "breathlessness",
  "sweating",
  "dehydration",
  "indigestion",
  "headache",
  "yellowish_skin",
  "dark_urine",
  "nausea",
  "loss_of_appetite",
  "pain_behind_the_eyes",
  "back_pain",
  "constipation",
  "abdominal_pain",
  "diarrhoea",
  "mild_fever",
  "yellow_urine",
  "yellowing_of_eyes",
  "acute_liver_failure",
  "fluid_overload",
  "swelling_of_stomach",
  "swelled_lymph_nodes",
  "malaise",
  "blurred_and_distorted_vision",
  "phlegm",
  "throat_irritation",
  "redness_of_eyes",
  "sinus_pressure",
  "runny_nose",
  "congestion",
  "chest_pain",
  "weakness_in_limbs",
  "fast_heart_rate",
  "pain_during_bowel_movements",
  "pain_in_anal_region",
  "bloody_stool",
  "irritation_in_anus",
  "neck_pain",
  "dizziness",
  "cramps",
  "bruising",
  "obesity",
  "swollen_legs",
  "swollen_blood_vessels",
  "puffy_face_and_eyes",
  "enlarged_thyroid",
  "brittle_nails",
  "swollen_extremeties",
  "excessive_hunger",
  "extra_marital_contacts",
  "drying_and_tingling_lips",
  "slurred_speech",
  "knee_pain",
  "hip_joint_pain",
  "muscle_weakness",
  "stiff_neck",
  "swelling_joints",
  "movement_stiffness",
  "spinning_movements",
  "loss_of_balance",
  "unsteadiness",
  "weakness_of_one_body_side",
  "loss_of_smell",
  "bladder_discomfort",
  "foul_smell_of urine",
  "continuous_feel_of_urine",
  "passage_of_gases",
  "internal_itching",
  "toxic_look_(typhos)",
  "depression",
  "irritability",
  "muscle_pain",
  "altered_sensorium",
  "red_spots_over_body",
  "belly_pain",
  "abnormal_menstruation",
  "dischromic _patches",
  "watering_from_eyes",
  "increased_appetite",
  "polyuria",
  "family_history",
  "mucoid_sputum",
  "rusty_sputum",
  "lack_of_concentration",
  "visual_disturbances",
  "receiving_blood_transfusion",
  "receiving_unsterile_injections",
  "coma",
  "stomach_bleeding",
  "distention_of_abdomen",
  "history_of_alcohol_consumption",
  "fluid_overload.1",
  "blood_in_sputum",
  "prominent_veins_on_calf",
  "palpitations",
  "painful_walking",
  "pus_filled_pimples",
  "blackheads",
  "scurring",
  "skin_peeling",
  "silver_like_dusting",
  "small_dents_in_nails",
  "inflammatory_nails",
  "blister",
  "red_sore_around_nose",
  "yellow_crust_ooze",
];

export default function Workplace() {
  const [inputSymptom, setInputSymptom] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [result, setResult] = useState<{ [key: string]: any } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputSymptom(value);

    if (value.trim()) {
      const filtered = SYMPTOMS_LIST.filter((symptom) =>
        symptom.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
    setInputSymptom("");
    setSuggestions([]);
  };

  const handlePredict = async () => {
    if (selectedSymptoms.length === 0) {
      setError("Please select at least one symptom.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/predict", {
        symptoms: selectedSymptoms,
      });
      setResult(response.data);
    } catch (err) {
      setError("Error fetching prediction. Please try again."+`${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-4xl font-bold text-white mb-6">
          Health Care Center
        </h1>

        <div className="bg-black p-6 rounded-xl shadow-lg max-w-2xl w-full border border-gray-700">
          <label className="text-white text-lg mb-2 block">
            Select Symptoms:
          </label>
          <input
            type="text"
            value={inputSymptom}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
            placeholder="Type symptoms..."
          />
          {suggestions.length > 0 && (
            <div className="bg-white border mt-2 rounded-md shadow text-black max-h-40 overflow-y-auto">
              {suggestions.map((symptom, index) => (
                <div
                  key={index}
                  onClick={() => handleAddSymptom(symptom)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {symptom.replace(/_/g, " ")}
                </div>
              ))}
            </div>
          )}

          {selectedSymptoms.length > 0 && (
            <div className="mt-3 text-white flex flex-wrap gap-2">
              {selectedSymptoms.map((s, i) => (
                <span
                  key={i}
                  className="bg-red-600 px-3 py-1 rounded-full text-sm"
                >
                  {s.replace(/_/g, " ")}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4">
            <button
              onClick={handlePredict}
              className="px-5 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>

          {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
        <h2 className="text-3xl font-bold text-white mt-10 mb-4">
          Our AI System Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
          {result &&
            Object.entries(result).map(([key, value], index) => {
              const formattedKey = key.replace(/_/g, " ").toLowerCase();
              let displayValue;

              const arrayLikeFields = [
                "medications",
                "diets",
                "precaution",
                "precautions",
                "workout",
              ];
              if (arrayLikeFields.includes(formattedKey)) {
                let items: string[] = [];
              
                if (Array.isArray(value)) {
                  items = value;
                } else if (typeof value === "string") {
                  items = value
                    .replace(/[\[\]']/g, "")
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item.length > 0);
                }
              
                // Use numbered list for medications and diets, bullets for others
                if (["medications", "diets"].includes(formattedKey)) {
                  displayValue = (
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm font-normal text-gray-700">
                      {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ol>
                  );
                } else {
                  displayValue = (
                    <ul className="list-disc list-inside space-y-1 mt-2 text-sm font-normal text-gray-700">
                      {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  );
                }
              } else {
                displayValue = (
                  <p className="mt-2 text-sm font-normal text-gray-700">
                    {String(value)}
                  </p>
                );
              }
              
              // Decide block size (full width for disease/description)
              const isFullWidth = ["disease", "description"].includes(formattedKey);
              
              return (
                <div
                  key={index}
                  className={`bg-white text-gray-800 font-semibold px-4 py-3 rounded-lg shadow-md text-left hover:scale-105 transition-transform ${
                    isFullWidth ? "md:col-span-2" : ""
                  }`}
                >
                  <strong className="capitalize">{formattedKey}</strong>
                  {displayValue}
                </div>
              );
              
            })}
        </div>
      </div>
    </>
  );
}
