# How to Structure an Effective Training Course with SSP Cloud notebooks

1. **Clear Objectives**: 👨‍🎓 Start with clear learning objectives. For example, a Python basics course could focus on data types, control structures, and basic data manipulation using libraries like Pandas.

2. **Pre-configured Environment**: Create an SSP Cloud environment with all necessary libraries included see the [next tab in order to configure the environment](https://docs.sspcloud.fr/en/content/tutorials/set-up-environment.html). This allows learners to focus on learning instead of dealing with setup problems.

3. **Modular Notebooks**: 📚 Break the course into several Notebooks, each covering a key concept or topic. Each notebook should have a combination of:

    - **Explanatory text**: To describe the theory and concepts behind the code.
    - **Code cells**: For learners to run, modify, and experiment with.
    - **Exercises**: Challenge students with problems to solve using the concepts they’ve learned.

    For example:

    - Notebook 1: Introduction to Python and data types.
    - Notebook 2: Control flow (loops, conditionals).
    - Notebook 3: Working with files and data.

4. **Step-by-Step Walkthroughs**: 👣 Each notebook should contain step-by-step instructions that learners can follow, starting with simple examples and building up to more complex exercises. Use markdown cells to explain what each piece of code does.

5. **Interactive Exercises**: Include exercises at the end of each module. Encourage learners to modify the code, test different inputs, and debug any errors they encounter.

Tip : :bulb: You can use the following HTML snippet within the notebook to hide the solution. These tags create collapsible sections that the user can expand or hide by clicking on them.

```markdown
<details>

<summary>

Show solution

</summary>

Content of the solution

</details>
```

6. **Visualizations and Data Exploration**: 🔎 Make use of the visualization libraries to create engaging plots and graphs. This is especially useful when teaching data analysis, as it allows learners to immediately see the impact of their code on data.

7. **Progressive Difficulty**: 📈 Start with basic concepts and gradually introduce more advanced topics, allowing learners to build their skills step by step. This scaffolding approach ensures that students aren’t overwhelmed but are constantly challenged.
