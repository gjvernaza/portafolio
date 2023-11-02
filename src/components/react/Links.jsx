
import '../react/links.css'


export default function Links() {
    function redireccionar(link) {
        window.open(link);
    }
    const handleClick_github = () => {
        redireccionar("https://github.com/gjvernaza");
    };
    const handleClick_linkedin = () => {
        redireccionar("https://www.linkedin.com/in/geordy-jahir-030937191/");
    };
    return (
        <div class="contacto-container-links">
            <img src="/src/images/github-lg.png" onClick={handleClick_github} />
            <img src="/src/images/linkedin.png" onClick={handleClick_linkedin} />
        </div>
  );

}