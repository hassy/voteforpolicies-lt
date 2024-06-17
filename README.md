1. Install dependencies

  ```sh
  npm install
  ```

2. Run a single instance of a Playwright virtual user in headed mode

  ```sh
  npx artillery run load-test --solo
  ```

Next steps:

- Possibly add more coverage with more categories
- Run the test on AWS Fargate
  - Set up an AWS account to run tests from
- Increase the number of virtual users
- Set up reporting to the [Artillery Dashboard](https://app.artillery.io)
- Work up to desired load, make sure everything is OK