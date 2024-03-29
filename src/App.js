import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is a correct syntax to output "Hello World" in Java?',
			answerOptions: [
				{ answerText: 'echo("Hello World");', isCorrect: false },
				{ answerText: 'print("Hello World");', isCorrect: false },
				{ answerText: 'System.out.println("Hello World");', isCorrect: true },
				{ answerText: 'Console.WriteLine("Hello World");', isCorrect: false },
			],
		},
		{
			questionText: 'Which data type is used to create a variable that should store text?',
			answerOptions: [
				{ answerText: 'myString', isCorrect: false },
				{ answerText: 'String', isCorrect: true },
				{ answerText: 'string', isCorrect: false },
				{ answerText: 'Txt', isCorrect: false },
			],
		},
		{
			questionText: 'How do you insert COMMENTS in Java code?',
			answerOptions: [
				{ answerText: '// This is a comment', isCorrect: true },
				{ answerText: '/* This is a comment', isCorrect: false },
				{ answerText: '# This is a comment', isCorrect: false },
				{ answerText: '/# This is a comment', isCorrect: false },
			],
		},
		{
			questionText: 'How do you create a variable with the numeric value 5?',
			answerOptions: [
				{ answerText: 'x = 5;', isCorrect: false },
				{ answerText: 'num x = 5;', isCorrect: false },
				{ answerText: 'float x = 5;', isCorrect: false },
				{ answerText: 'int x = 5;', isCorrect: true },
			],
		},
    {
			questionText: 'How do you call a method in Java?',
			answerOptions: [
				{ answerText: 'methodName[];', isCorrect: false },
				{ answerText: 'methodName;', isCorrect: false },
				{ answerText: '(methodName);', isCorrect: false },
				{ answerText: 'methodName();', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}