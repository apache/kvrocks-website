import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import * as echarts from 'echarts';
import type {MenuProps} from 'antd';
import { Menu } from 'antd';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

type FeatureItem = {
  imgPath:string;
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    imgPath: require('@site/static/img/namespace.png').default,
    title: 'Namespace',
    description: (
        <>
          Similar to Redis SELECT but equipped with token per namespace
        </>
    ),
  },
  {
    imgPath: require('@site/static/img/cluster.png').default,
    title: 'Replication',
    description: (
        <>
          Async replication using binlog like MySQL
        </>
    ),
  },
  {
    imgPath: require('@site/static/img/high-available.png').default,
    title: 'High Available',
    description: (
        <>
          Support Redis sentinel to failover when master or slave was failed
        </>
    ),
  },
  {
    imgPath: require('@site/static/img/replication.png').default,
    title: 'Cluster',
    description: (
        <>
          Centralized management but accessible via any Redis cluster client
        </>
    ),
  },
];

function Feature({imgPath,title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md" style={{width:"100%",height:"100%",margin:'30px 0px'}}>
        <img className={styles.imgItem} src={imgPath} alt={title}/>
        <h3>{title}</h3>
        <div className={styles.itemDes}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export function PieChartRight(): JSX.Element {
  useEffect(() => {
    var myChart_obj=document.getElementById("PieChartRight")
    if (myChart_obj != null && myChart_obj != undefined){
      echarts.dispose(document.getElementById("PieChartRight"))
    }
    var myChart = echarts.init(document.getElementById("PieChartRight"));
    myChart.setOption({
      title: {
        text: 'Supported Commands',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',

      },
      legend: {
        orient: 'vertical',
        left: 'right'
      },
      series: [
        {
          type: 'pie',
          radius: '75%',
          data: [
            { value: 875, name: 'Supported ',itemStyle: {color: 'rgb(255,0,102)'} },
            { value: 125, name: 'Todo',itemStyle: {color: 'rgb(246,108,104)'} }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  })
  return <div id="PieChartRight" style={{width: "50%",height: "480px"}} />
}

export function HistogramChartLeft(): JSX.Element {
  useEffect(() => {
    var myChart_obj=document.getElementById("LineChartLeft")
    if (myChart_obj != null && myChart_obj != undefined){
      echarts.dispose(document.getElementById("LineChartLeft"))
    }
    var myChart = echarts.init(document.getElementById("LineChartLeft"));
    myChart.setOption({
      title: {
        text: 'QPS On Command',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name:'QPS',
      },
      yAxis: {
        type: 'category',

        data: ['HSET', 'ZADD', 'SADD', 'LPUSH','INCR','GET','SET','PING_BULK','PING_INLINE']
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series'
          },
          data: [
            {value: 220000,itemStyle: {color: 'rgb(41,90,166)'}},
            {value: 195000,itemStyle: {color: 'rgb(81,189,189)'}},
            {value: 280000,itemStyle: {color: 'rgb(141,197,132)'}},
            {value: 275000,itemStyle: {color: 'rgb(206,230,214)'}},
            {value: 280000,itemStyle: {color: 'rgb(247,132,165)'}},
            {value: 395000,itemStyle: {color: 'rgb(206,181,89)'}},
            {value: 310000,itemStyle: {color: 'rgb(48,181,214)'}},
            {value: 680000,itemStyle: {color: 'rgb(248,132,107)'}},
            {value: 670000,itemStyle: {color: 'rgb(65,208,118)'}}]
        }
      ]
    })
  })
  return <div id="LineChartLeft" style={{width: "50%",height: "400px"}} />
}

export function LineChartRight(): JSX.Element {
  useEffect(() => {
    var myChart_obj=document.getElementById("LineChartRight")
    if (myChart_obj != null && myChart_obj != undefined){
      echarts.dispose(document.getElementById("LineChartRight"))
    }
    var myChart = echarts.init(document.getElementById("LineChartRight"));
    myChart.setOption({
      title: {
        text: 'QBS On Bytes',
        subtext: 'GET/SET benchmark',
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: [128,512,1024,4096],
        name:'Bytes'
      },
      yAxis: {
        type: 'value',
        name:'QPS'
      },
      series: [
        {
          data: [290000,260000,210000,94000],
          type: 'line',
          name:'SET'
        },
        {
          data: [400000,330000,305000,240000],
          type: 'line',
          name:'GET',
          color: "red",
          lineStyle:{
            color:"red"
          }
        }
      ],
      legend: {
        data: ['SET', 'GET'],
        x: 'right',
        y: 'top',
      },
    });
  })
  return <div id="LineChartRight" style={{width: "50%",height: "445px",marginLeft:"50px",marginTop:"40px"}} />
}

export function CodeBlock(): JSX.Element {
  const [pythonCode, setPythonCode]=useState('r = redis.Redis(host=\'localhost\', port=6666, decode_responses=True)\n' +
      '\n' +
      'r.set(\'username\', \'kvrocks\')\n' +
      '# True\n' +
      'r.get(\'username\')\n' +
      '# kvrocks')
  const [javaCode, setJavaCode]=useState('ackage org.example;\n' +
      'import redis.clients.jedis.Jedis;\n' +
      'import redis.clients.jedis.JedisPool;\n' +
      '\n' +
      'JedisPool pool = new JedisPool("127.0.0.1", 6666);\n' +
      '\n' +
      'try (Jedis jedis = pool.getResource()) {\n' +
      '\tjedis.set("username", "kvrocks");\n' +
      '  System.out.println(jedis.get("username"));\n' +
      '}')
  const [golangCode, setGolangCode]=useState('import (\n' +
      '\t"context"\n' +
      '\t"fmt"\n' +
      '\t"github.com/redis/go-redis/v9"\n' +
      ')\n' +
      '\n' +
      'client := redis.NewClient(&redis.Options{\n' +
      '\tAddr:\t  "localhost:6666",\n' +
      '})\n' +
      '\n' +
      'err := client.Set(ctx, "username", "kvrocks", 0).Err()\n' +
      'if err != nil {\n' +
      '    panic(err)\n' +
      '}\n' +
      '\n' +
      'val, err := client.Get(ctx, "username").Result()\n' +
      'if err != nil {\n' +
      '    panic(err)\n' +
      '}\n' +
      'fmt.Println("username", val)')
  const [code, setCode]=useState(javaCode)
  const [current, setCurrent] = useState('java');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if (e.key=="python"){
      setCode(pythonCode)
    }
    else if(e.key=="java"){
      setCode(javaCode)
    }
    else if(e.key=="golang"){
      setCode(golangCode)
    }
  }
  const items: MenuProps['items'] = [
    {label: 'Java',key: 'java'},
    {label: 'Go',key: 'golang'},
    {label: 'Python3',key: 'python'}]
  return (
    <div style={{width:"50%"}}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <AceEditor
          mode="python"
          theme="monokai"
          name="blah2"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          readOnly={true}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            useWorker:false,
            tabSize: 2
          }}
          style={{marginTop:"10px",height:"400px",width:"100%"}}/>
    </div>
  )
}

export function SelectMenu(): JSX.Element {
  const [menuFlag, setMenuFlag] = useState(true);
  const handleShow = (e)=>{
    setMenuFlag(!menuFlag);
  }
  return(
      <div className={styles.selectMenuBlock}>
        <div className="text--center padding-horiz--md" style={{width:'100%',height:'100%',marginTop:'50px',
          display:"flex",justifyContent:"center"}} >
          <div className={styles.menuBlock}>
            <h1 onClick={handleShow} style={{color:(menuFlag) ? "black" : "gray"}} data-value="redisCompatible">Redis Compatible</h1>
            <div className={styles.redisStyle} style={{ visibility:(menuFlag) ? "visible" : "hidden", color:(menuFlag) ? "black" : "gray"}}>
              <div className={styles.blueLine} >
                <div></div>
              </div>
              <p style={{fontSize:"22px"}}>Users can access Apache Kvrocks via any Redis client.</p>
            </div>
          </div>
          <div className={styles.menuBlock}>
            <h1 onClick={handleShow} style={{color:(!menuFlag) ? "black" : "gray"}} data-value="performanceCompare">Performance Compare</h1>
            <div className={styles.performanceStyle} style={{ visibility:(!menuFlag) ? "visible" : "hidden"}}>
              <div className={styles.blueLine} >
                <div></div>
              </div>
              <p style={{fontSize:"22px"}}>The perfect balance between performance and cost.</p>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md" style={{width:'100%',height:'100%',marginTop:'50px',
          display:"flex",justifyContent:"center"}} >
          <div  className={styles.chartBlock} style={{ display:(menuFlag) ? "flex" : "none"}}>
            <CodeBlock/>
            <PieChartRight/>
          </div>
          <div className={styles.chartBlock} style={{ display:(!menuFlag) ? "flex" : "none"}}>
            <HistogramChartLeft/>
            <LineChartRight/>
          </div>
        </div>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className="row" >
          <div className={clsx('col col--12')} style={{marginBottom:'100px'}}>
            <SelectMenu />
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
