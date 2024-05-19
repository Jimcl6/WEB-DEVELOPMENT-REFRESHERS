const students = [
  ["Jed", "Ian", "Michael"],
  ["Lawrence", "Siobhan", "Jin"],
  ["Lester", "Alister", "Oliver"],
];

/* The code snippet is using a nested loop to iterate over a 2-dimensional array named `students`. */
for (let i = 0; i < students.length; i++) {
  const row = students[i];
  console.log(`ROW #:${i + 1}`);

  /* The code snippet you provided is using a nested loop to iterate over a 2-dimensional array named
  `students`. */
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
