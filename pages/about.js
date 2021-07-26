import Head from 'next/head'

import styles from '../styles/about.module.css'

export default function AboutUs() {
    return (
      <body className={styles.body}>
      <div className={styles.container}>
          <h1 className={styles.AboutHeader}>About Us</h1>
            <div className={styles.content}>
              <p>
                Yalobusha County Crime Stoppers
                encourages members of the community to
                assist local law enforcement agencies in the
                fight against crime by overcoming the two key
                elements that inhibit community involvement -
                fear and apathy.  Crime Stoppers provides a
                telephone number and Web Tips to encourage
                citizens in the community to volunteer vital
                information helpful to law enforcement
                agencies to fight against crime.  Callers
                remain anonymous and are eligible to receive
                a cash reward, if the information given leads to
                an arrest and a grand jury indictment of a felony
                offender.
              </p>
              <p>
                The Yalobusha County Crime Stoppers “hotline”
                is a vital resource in helping reduce crime in our
                community. With its triangle of cooperation
                between the citizens, the media and law
                enforcement, Yalobusha County Crime Stoppers
                is dedicated to putting criminals behind bars
                while building a foundation of trust and support.
                The goal of Yalobusha County Crime Stoppers is
                to make the streets safer for our families and
                neighborhoods.
              </p>
              <p>
              Yalobusha County Crime Stoppers breaks through the two barriers of apathy and fear of reprisal. Cash rewards reduce apathy. Although many people refuse rewards, the availability of cash is an incentive to citizens who may not otherwise give information. Fear of reprisal is reduced because callers remain completely anonymous throughout the process.   
              </p>
            </div>
        
          <h1 className={styles.HIWHeader}>Tip Process</h1>
          <div className={styles.content}>
            
          <p>
              If you've seen suspicious activity, or
              know that a crime has been committed,
              simply call 1-866-933-
              TIPS (8477). You don't have to give
              your name! An operator will take your
              information and assign you a code
              number. If there is an arrest and indictment in the case, you call
              Crime Stoppers again, provide your
              code number, and a reward will be paid
              - no questions asked!
              The operator will give instructions about
              how to collect your cash reward. You
              never have to reveal your identity or
              sign any receipts.
            </p>
            <p>
              <strong>
              Rewards range from $300 to $1,000. This is based on the severity of the crime.
              If your tip leads to an arrest and indictment, you could receive up to
              $1,000.
              </strong>
            </p>
            <p>
            The information you have may help solve a crime or prevent further crime from occurring. It could be the piece of the puzzle that police are looking for or it could be new information that police are unaware of. It does not matter how trivial you may think it is, it might be important to an investigation.
            </p>
        
          </div>
          
      </div>
      </body> 
    )
  }

