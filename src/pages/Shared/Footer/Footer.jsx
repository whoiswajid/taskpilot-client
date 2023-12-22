

const footer = () => {
    return (
        <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full text-fuchsia-600 font-bold text-xl ">
                        <h1>TaskPilot</h1>
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <a className="hover:text-fuchsia-600"  rel="noopener noreferrer" href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a className="hover:text-fuchsia-600"  rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a className="hover:text-fuchsia-600"  rel="noopener noreferrer" href="https://www.instagram.com/">Instagram</a>
                    </li>
                    <li>
                        <a className="hover:text-fuchsia-600" rel="" href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li>
                        <a className="hover:text-fuchsia-600"  rel="noopener noreferrer" href="https://twitter.com/">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default footer;