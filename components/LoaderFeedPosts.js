export default function LoaderFeedPosts() {
  return (
    <article className="allcontainer">
      <div className="background">
        <div className="right">
          <div className="bar" />
          <div className="mask thick" />
        </div>
        <div className="left">
          <div className="image" />
          <div className="mask thick" />
        </div>
        <div className="right">
          <div className="bar" />
          <div className="mask thick" />
          <div className="bar" />
        </div>
      </div>

      <style jsx>
        {`
          .allcontainer {
            background: white;
            border: 1px solid #e5e6e9;
            border-radius: 5px;
            max-width: 769px;
            padding: 1rem;
            margin: 0 auto;
            margin-bottom: 10px;
          }
          .background {
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: preloadAnimation;
            animation-timing-function: linear;
            background: #f6f7f8;
            background: linear-gradient(
              to right,
              #eeeeee 8%,
              #dddddd 18%,
              #eeeeee 33%
            );
            display: block;
            min-height: 100px;
          }
          @keyframes preloadAnimation {
            0% {
              background-position: -769px 0;
            }
            100% {
              background-position: 769px 0;
            }
          }
          .right {
            flex: 1;
          }
          .image {
            width: 120px;
            height: 230px;
            background: transparent;
          }
          .bar {
            height: 13px;
            background: transparent;
            position: relative;
            width: 100%;
          }
          .bar::before {
            position: absolute;
            content: "";
            left: 0;
            height: 22px;
            background: white;
          }
          .bar::after {
            position: absolute;
            right: 0;
            height: 22px;
            content: "";
            background: white;
          }
          .bar.medium::after {
            width: 50%;
          }
          .bar.small::after {
            width: 75%;
          }
          .mask {
            background: white;
            width: 100%;
          }
          .thick {
            height: 1.5rem;
          }
          .thin {
            height: 0.5rem;
          }
        `}
      </style>
    </article>
  );
}
