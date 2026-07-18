import { useState } from "react";
import { questions } from "../data/questions";
import Intro from "../components/Intro";
import QuestionCard from "../components/QuestionCard";
import Success from "../components/Success";
import LoadingScreen from "../components/LoadingScreen";
const Home = () => {

    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [currentId, setCurrentId] = useState(1);
    const [loading, setLoading] = useState(false);
    const currentQuestion = questions.find(
        question => question.id === currentId
    );

    const handleOptionClick = (option) => {

       if (option.action === "BUY_IPHONE") {
    setLoading(true);
    return;
}

        if (option.next) {
            setCurrentId(option.next);
        }

    };

    return (

        <div className="flex min-h-[100dvh] items-center justify-center overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 px-4 py-8">

            {!started ? (

                <Intro
                    onStart={() => setStarted(true)}
                />

            ) : loading ? (
    <LoadingScreen
        onFinish={() => {
            setLoading(false);
            setCompleted(true);
        }}
    />
) : completed ? (
    <Success />
) : (

                <QuestionCard
                    question={currentQuestion}
                    onOptionClick={handleOptionClick}
                />

            )}

        </div>

    );

};

export default Home;