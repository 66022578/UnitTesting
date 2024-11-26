function classifyPatient(systolic, diastolic, sugar) {
  if (systolic <= 130 && diastolic <= 85 && sugar < 100) {
    return 'White';
  } else if (
    (systolic > 130 && systolic <= 140) ||
    (diastolic > 85 && sugar >= 100 && sugar < 125)
  ) {
    return 'Green';
  } else if (systolic > 160 && systolic <= 180 && sugar >= 140 && sugar < 160) {
    return 'Yellow';
  } else if (systolic > 180 && sugar >= 160 && sugar < 200) {
    return 'Orange';
  } else if (sugar >= 200) {
    return 'Red';
  }
}

module.exports = classifyPatient;
