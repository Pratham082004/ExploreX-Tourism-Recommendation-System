import './Loading.css';

/**
 * A simple, animated loading spinner component.
 * Use this to show a loading state while fetching data or performing heavy operations.
 */
function Loading() {
    return (
        <div className="loading-container">
            <div className="spinner-wrapper">
                <div className="spinner-bg"></div>
                <div className="spinner-border"></div>
            </div>
            <h2 className="loading-text">
                Discovering destinations...
            </h2>
        </div>
    );
}

export default Loading;