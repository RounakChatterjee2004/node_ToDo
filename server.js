import connectDB from "./data/database.js"; // Note the .js extension
import { app } from "./app.js"; // Ensure this import is also correct

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
