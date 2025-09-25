## Don't forget to give a :star: to make the project popular.

## ❓What is this Repository about?

- This repo contains example code for **How to Auto Heal Tests in Playwright**, demonstrating how to build resilient UI tests and reduce flakiness using Playwright’s smart locator features and LambdaTest’s Auto Heal capability.
- You’ll find sample test scripts using semantic locators (getByRole, getByLabel, getByText) and a complete setup for running these tests both locally and in the LambdaTest cloud environment.

## ❓More about How to Auto Heal Tests in Playwright...
This tutorial explores techniques for building self-healing UI tests using Playwright. You’ll learn how to handle dynamic components, implement retry strategies, and enable LambdaTest’s Auto Heal feature to automatically recover from locator failures. It's perfect for teams building automation in fast-changing UIs.

## Running the Code

To run any of the basic scripts from command line use the following command in the correct folder:
```bash
npx playwright test tests/register.spec.js
```

## Running the Cloud Grid Sample

By default, the test would be running on LambdaTest Platform on Chrome Browser, and on Windows 11.

As a prerequisite for this code, you need:
1. Node.js installed

2. Visual Studio Code

3. Playwright & dependencies installed:

```bash
npm install
npx playwright install
```

4. In order to run this cloud grid sample, please run the command below in the project folder:
Make sure you’ve set your LambdaTest username and access key as environment variables:

```bash
export LT_USERNAME=your_username
export LT_ACCESS_KEY=your_access_key
```
Then, run:

```bash
npx playwright test
```

## ✍️ Blog Link

- [How to Auto Heal Tests in Playwright](TBD)

## 🧬 Need Assistance?

- Discuss your queries by writing to me @ `paulocol@gmail.com`
  OR ping me on:
    - [LinkedIn](https://www.linkedin.com/in/pcesar/)

### :thought_balloon: Checkout the blogs related to Testing on [LambdaTest blog](https://www.lambdatest.com/blog/author/paulocoliveira/).
