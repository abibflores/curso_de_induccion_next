import styles from './Maps.module.css';

export const Maps = () => {
    return (
        <div className={styles.container}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.865532732723!2d-99.18123395427666!3d19.41531072744137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff4489e635e3%3A0xed1c076e8bc9b8e7!2sColonia%20Condesa%2C%2006140%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1725492082382!5m2!1ses!2smx" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}