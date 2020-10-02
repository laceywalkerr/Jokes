function App() {
    return (
        <div className="App">
            <PostProvider>
                {/* <AwesomeNewPostComponent/> */}
                <PostList />
            </PostProvider>
        </div>
    );
}