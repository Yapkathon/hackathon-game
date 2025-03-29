import styles from "./action.module.css"
import ActionCard from "./../components/ActionCard";

export default function Action() {
    return (
    <div className={styles.middle_container}>
        <div className={styles.header}>
            <h2 className={styles.status_bar}>Age 32</h2>
            <span className={styles.status_bar}>🎯 2/3</span>

            <ActionCard icon="📚" title="Study" value="🎓 +2" cost="" goal={2}/>
            <ActionCard icon="👩‍🏫" title="Tutor" value="🎓 +1" cost="$10K" goal={1}/>
            <ActionCard icon="💼" title="Working" value="$150K" cost="" goal={2}/>
            <ActionCard icon="🕒" title="Overtime" value="$75K" cost="😊 -40" goal={1}/>
            <ActionCard icon="🔎" title="Find Career" value="4 jobs offer" cost="" goal={1}/>
            <ActionCard icon="✈️" title="Travel" value="😊 +200" cost="$20K" goal={1}/>
        </div>
        <button className={styles.age_button}>AGE</button>
    </div>
  );
};