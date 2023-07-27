import React, { useEffect } from 'react';

const DisqusCommentSection = () => {
  useEffect(() => {
    // Function to set Disqus configuration variables
    // const disqus_config = function () {
    //   this.page.url = pageUrl; // Replace pageUrl with your page's canonical URL variable
    //   this.page.identifier = pageIdentifier; // Replace pageIdentifier with your page's unique identifier variable
    // };

    // Load Disqus embed script
    const loadDisqus = () => {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://indeblockchain.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    };

    // Load Disqus script when the component mounts
    loadDisqus();

    // Cleanup function to remove the Disqus script when the component unmounts
    return () => {
      const d = document;
      const disqusScript = d.querySelector('script[src="https://indeblockchain.disqus.com/embed.js"]');
      if (disqusScript) {
        disqusScript.remove();
      }
    };
  }, );

  return (
    <div>
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </div>
  );
};

export default DisqusCommentSection;
