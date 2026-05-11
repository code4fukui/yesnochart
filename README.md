# yesnochart

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An interactive flowchart generator that creates dynamic decision paths from a simple CSV file.

## Demos
- [Sample Chart](https://code4fukui.github.io/yesnochart/)
- [Programming Guide](https://code4fukui.github.io/yesnochart/#data/programming.csv)
- [Open Data Assessment](https://code4fukui.github.io/yesnochart/#data/opendata-assist.csv) (based on [Digital Agency materials](https://www.digital.go.jp/resources/open_data/materials-for-learning))

## Features
- **Create from a simple CSV**: Define your entire flowchart logic—questions, answers, and paths—in a single CSV file.
- **Serverless**: Runs entirely in the browser. Host it on any static web server like GitHub Pages.
- **Multi-branch Support**: Go beyond simple YES/NO. Create questions with three or more possible answers.
- **Easy Sharing**: Share your chart with a single URL. A QR code is automatically generated for easy mobile access.

## Usage
1.  **Create a CSV file** with your flowchart logic, following the format described below.
2.  **Host the CSV file** online so it's accessible via a public URL (e.g., on GitHub, a Gist, or your own server).
3.  **Create the chart URL** by appending your CSV file's URL after a `#` to the main path.

**URL Structure:**
```
https://code4fukui.github.io/yesnochart/#<your-csv-file-url>
```

**Example:**
`https://code4fukui.github.io/yesnochart/#https://code4fukui.github.io/yesnochart/data/sample.csv`

## CSV Format
Your CSV file must have a header row with the following columns. The chart always starts from the row with an `id` of `1`.

- `id`: A unique numeric ID for each step.
- `question`: The text displayed as the question or statement.
- `answer1_label`: The text for the first answer button.
- `answer1_id`: The next `id` to jump to if this answer is chosen. Can also be a full URL (e.g., `https://example.com`) to link externally.
- `answer2_label`, `answer2_id`: Columns for the second answer.

To add more choices, simply add more column pairs like `answer3_label`, `answer3_id`, and so on.

### Example CSV
```csv
id,question,answer1_label,answer1_id,answer2_label,answer2_id
1,Do you know what a YES/NO chart is?,YES,3,NO,2
2,It's a tool that guides you through choices, like YES or NO.,OK,3,,
3,Want to make one?,YES,5,NO,4
4,Come back when you're ready!,OK,https://fukuno.jig.jp/4408,I want to make one now,5
5,This project is open source on GitHub. You can modify it!,Great! I'll try!,https://github.com/code4fukui/yesnochart/,What's GitHub?,6
6,GitHub is a service for sharing open-source projects.,Try it!,https://fukuno.jig.jp/2875,Seems difficult,7
```

## License
[MIT License](LICENSE)