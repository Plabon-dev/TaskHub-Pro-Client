
const Features = () => {
    return (
        <div>

            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 my-10">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-10">What Makes Us Special</h2>
                </div>
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://images.pexels.com/photos/4560079/pexels-photo-4560079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-80 dark:bg-gray-500 aspect-video object-cover" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Effortless Task Creation and Management</h3>
                            <p className="my-6 dark:text-gray-400">Efficiency at your fingertips! Easily create, organize, and manage tasks with just a few clicks. Add detailed information such as titles, descriptions, deadlines, and priority levels, empowering you to stay in control of your work. As tasks are added, watch them dynamically populate your to-do list, setting the stage for a well-organized and productive day.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://cdn.vectorstock.com/i/1000x1000/46/95/drag-and-drop-image-photo-picture-icon-with-hand-vector-31064695.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video object-cover" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Intuitive Drag-and-Drop Workflow</h3>
                            <p className="my-6 dark:text-gray-400">Experience the flexibility of our drag-and-drop functionality, allowing you to effortlessly move tasks between to-do, ongoing, and completed lists. Tailor your workflow to match your priorities, enhancing collaboration and providing a visual representation of your progress. Take charge of your tasks like never before!.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-80 dark:bg-gray-500 aspect-video object-cover" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Personalized Task Dashboards</h3>
                            <p className="my-6 dark:text-gray-400">Your workspace, your way. Each user enjoys a personalized dashboard, complete with a profile picture and a snapshot of tasks at hand. Dive into a visual representation of your progress, showcasing tasks you've added, tasks in progress, and completed tasks. Stay organized and on top of your game with a dashboard designed just for you.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://www.pushengage.com/wp-content/uploads/2023/06/In-App-Notification-Examples.png" alt="" className="h-80 dark:bg-gray-500 aspect-video object-cover" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Stay Informed with Notifications</h3>
                            <p className="my-6 dark:text-gray-400">Never miss a beat! Receive timely notifications for task assignments, updates, and impending deadlines. Our platform keeps you informed and connected, ensuring you are always up-to-date on the latest developments in your collaborative tasks. Stay in sync with your team effortlessly.</p>

                        </div>
                    </div>
                    
                </div>

            </section>
        </div>
    );
};

export default Features;