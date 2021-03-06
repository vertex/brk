import Head from 'next/head'
import Header from '../components/Header'
import LZString from 'lz-string'

export default function Resume({position = 'Member of the Technical Staff, Site Reliability Engineer'}) {
  return (
    <>
    <Head>
      <title>Bryon Keck - Resume</title>
    </Head>
    <Header />
    <div className="container mx-auto font-serif ">
      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-1 text-center">
          <h2 className="text-xl font-extrabold">Bryon Keck</h2>
          Scottsdale, AZ 85257 • (520) 220-1171
          <br/>
          <a href="mailto:hi@brk.dev">hi@brk.dev</a> • <a href="https://www.linkedin.com/in/bryonkeck" target="_blank">www.linkedin.com/in/bryonkeck</a>
        </div>
        <div className="col-span-1 border-top">
          <h3 className="text-center text-lg font-extrabold">{position}</h3>
          <p className="italic my-2">
            Multiple award-winning, innovative and detail-oriented site reliability engineer and team lead dedicated bringing observability to trillions of transactions 
            per minute. Leverages technical, analytical and problem-solving skills to fuel competitive advantage and revenue growth, while also having the ability to 
            develop towards ambitious performance through creation of an inclusive and innovative team culture
          </p>
          <span className="font-bold col-span-6">Key Qualifications</span>
          <p>
            <strong className="italic">Software:</strong> Javascript, Node.js, ECMAScript 2017, Linux, Bash command line, PHP, Android, Java, MySQL <br />
            <strong className="italic">Packages:</strong> Angular, Kraken.js, Express.js, React, Webpack, Babel, Highcharts, LESS, SASS, Riak, Qpid, Web Sockets, Open Stack<br />
            <strong className="italic">Technology:</strong> Observability, REST, Responsive Design, OAuth, Mobile, TDD, Indexing, Document Storage, JSON, ORM, MVC, AJAX
          </p>
        </div>
        <div className="col-span-1 border-top">
          <h3 className=" text-center text-lg font-extrabold">Professional Experience</h3>
        </div>
{/*  
* Brings observability to one trillion transactions per minute 
            * Re-designed the PayPal command center around Service Level Indicators and Service Level Objectives on a global scale
             */}

        
        <div className="col-span-1">
          <span className="font-bold col-span-6">Site Reliability Engineer, Embedding (MTS1)</span>
          <span className="italic col-span-6 float-right">February 2020 to Present</span><br />
          <span className="font-bold col-span-6">PayPal</span> – Scottsdale, AZ
          <p className="my-2">
            Member of a small tiger team dedicated to re-designing the PayPal Command Center observability and alerting into key <em>Service Level Indicators</em>.
            Responsible for understanding pertinent SLIs and how to represent them into actionable visualizations using a new observability platform. Worked directly with
            customers to understand effectiveness of new visualizations, reducing <em>Mean Time to Detect</em> live site issues by approximately five minutes.
          </p>
          <p className="italic">
            Selected Contributions:
          </p>
          <ul className="list-disc list-inside">
            <li>Reduced <em>Mean Time to Detect</em> by five minutes</li>
            <li>Brought more effective <em>alerting</em> and <em>observability</em> to the Command Center</li>
            <li>Directly responsible for identifying key incidents, allowing mitigation before large TPV impacts</li>
          </ul>
        </div>

        <div className="col-span-1">
          <span className="font-bold col-span-6">Architect, Front End (MTS1)</span>
          <span className="italic col-span-6 float-right">June 2014 to February 2020</span><br />
          <span className="font-bold col-span-6">PayPal</span> – Scottsdale, AZ
          <p className="my-2">
            Integral part of a team that was responsible for designing, and engineering a user-facing web application; designed to provide realtime processing, statistics and alerts based on merchant performance and profit loss. Reviewed designs, facilitated priorities,
            oversaw code reviews and release cycles. Maintained and up kept a reliable and easily understood codebase. Design and optimize
            displays representing merchant API calls and responses, across all of PayPal at minute, API, and response code level granularity.
            Combined different data types such as conversion rate information to help identify and display patterns in TPV loss.
          </p>
          <p className="italic">
            Selected Contributions:
          </p>
          <ul className="list-disc list-inside">
            <li>Led team focused on bringing customers best experience possible to debug merchant impacting issues.</li>
            <li>Provided company-wide Javascript support and assisted in organizing multiple Javascript community events.</li>
            <li>Was promoted to Architect after 3 years of continually exceeding management’s expectations.</li>
          </ul>
        </div>
        <div className="col-span-1">
          <span className="font-bold col-span-6">Web Developer</span>
          <span className="italic col-span-6 float-right">March 2013 to June 2014</span><br />
          <span className="font-bold col-span-6">Biz Anytime</span> (now SquadPod) – Tucson, AZ
          <p className="my-2">
            Designed and architected a new product in the digital, remote-workforce collaboration space.
          </p>
        </div>
        <div className="col-span-1">
          <span className="font-bold col-span-6">Senior Engineer</span>
          <span className="italic col-span-6 float-right"> October 2006 to March 2013</span><br />
          <span className="font-bold col-span-6">Brink Media</span> – Tucson, AZ
          <p className="my-2">
            Managed a team of developers in day-to-day operations. Implemented MVC methodologies in the front end using Backbone.js.
          </p>
          <p className="italic">
            Selected Contributions:
          </p>
          <ul className="list-disc list-inside">
            <li>Was directly responsible for interfacing with corporate clients such as the National Guard, PayPal, the MPAA, SuperChannel CA, and Rapiscan, which work exceeded clients’ expectations.</li>
          </ul>
        </div>
        <div className="col-span-1 my-0 border-top">
          <h3 className="text-left text-lg font-extrabold">Educational Background</h3>
        </div>
        <div className="col-span-1">
            <p>

              <span className="font-bold">Associate of Applied Science / Computer Programming/Analytics (2009)</span> - Pima Community College, Tucson, AZ<br />
              <span className="font-bold italic">Honors: </span> Webby Award Honoree 2013 • CIW Site Development Associate 2012 • Addy Tucson Gold & Best of Show 2011 •
              Addy Tucson Silver (2) 2011 • PSAid.org First place 2010 • Webby Award Honoree 2010 • Boy Scouts of America, Eagle Scout 2007
            </p>
        </div>
      </div>
    </div>
    </>
  )
}
Resume.getInitialProps = async (ctx) => {
  const {res} = ctx;
  if(typeof ctx.query.p !== 'undefined') {
    if(ctx.query.p.startsWith('new')) {
      console.log('/resume?p=' + LZString.compressToEncodedURIComponent(ctx.query.p.replace('new','')))
      res.writeHead(301, {Location: '/resume?p=' + LZString.compressToEncodedURIComponent(ctx.query.p.replace('new',''))})
      res.end()
    } else {
      return {
        position: LZString.decompressFromEncodedURIComponent(ctx.query.p)
      }
    }
  }
  return {}
}