<template>
  <div class="home">
    <div style="max-width:100% !important;">
      <div style="display: flex; justify-content: space-between">
        <a style="text-align: left; color:#0F92CB;font-size: 32px;margin:15px 15px 25px 15px">Know Stats</a>
        <div>
          <div style="display: flex">
            <span class="stat-holder" style="padding: 15px">
              <a href="http://testnet.explorer.knownetwork.io" target="_blank">
                Explorer
              </a>
            </span>
            <span class="stat-holder" style="padding: 15px">
              <a href="http://testnet.wallet.knownetwork.io" target="_blank">
                Wallet
              </a>
            </span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info bestblock text-info">
            <div class="pull-left icon-full-width"><i class="icon-block"></i></div>
            <div class="big-details-holder"><span class="small-title">last block hash</span><span
              class="big-details">{{ block.hash }}</span></div>
            <div class="clearfix"></div>
          </div>
        </div>

        <div class="col-md-4 col-xs-6 stat-holder">
          <!--{{ lastBlock | timeClass : true }}-->
          <div class="big-info text-info ">
            <div class="pull-left icon-full-width"><i class="icon-time"></i></div>
            <div class="big-details-holder"><span class="small-title">last block</span><span
              class="big-details">{{ lastBlockTime }}&nbsp;s</span></div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info">
            <div class="pull-left icon-full-width"><i class="icon-gasprice"></i></div>
            <div class="big-details-holder"><span class="small-title">reward&nbsp;<span
              class="small">(current)</span></span><span
              class="big-details">{{ block.uncles/100000000 }} KN</span></div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info">
            <div class="pull-left icon-full-width"><i class="icon-uncle"></i></div>
            <div class="big-details-holder"><span class="small-title">best block&nbsp;<span
              class="small">(current)</span></span><span
              class="big-details">{{'#'}}{{ block.number }}</span></div>
            <div class="clearfix"></div>
          </div>
        </div>


        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info">
            <div class="pull-left icon-full-width"><i class="icon-check"></i></div>
            <div class="big-details-holder"><span class="small-title">active nodes&nbsp;<span
              class="small">(current)</span></span><span
              class="big-details">{{ stats.peers }}</span></div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info">
            <div class="pull-left icon-full-width"><i class="icon-bulb"></i></div>
            <div class="big-details-holder"><span class="small-title">uptime&nbsp;<span
              class="small">(current)</span></span><span
              class="big-details">{{ stats.uptime }}</span></div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info">
            <div class="pull-left icon-full-width"><i class="icon-node"></i></div>
            <div class="big-details-holder"><span class="small-title">delegate&nbsp;<span
              class="small">(current)</span></span><span
              class="big-details">{{ stats.delegateCount }}</span></div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info">
            <div class="pull-left icon-full-width"><i class="icon-cancel-o"></i></div>
            <div class="big-details-holder"><span class="small-title">bad peers&nbsp;</span><span
              class="big-details">{{ stats.badPeers }}</span></div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info">
            <div class="pull-left icon-full-width"><i class="icon-group"></i></div>
            <div class="big-details-holder"><span class="small-title">forger &nbsp;<div
              class="small">{{block.forger.username}}</div></span>
              <div class="small">Productivity: {{ block.forger.productivity }}</div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="row">
        <div class="col-xs-6 stat-holder">
          <div class="big-info uncleCount text-info" style="text-align: left">
            <span>Block time</span>
            <div class="icon-full-width">
              <div class="spark1"></div>
            </div>
          </div>
        </div>
        <div class="col-xs-6  stat-holder">
          <div class="big-info uncleCount text-info" style="text-align: left">
            <span>Transactions</span>
            <div class="icon-full-width">
              <div class="spark2"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="padding-top: 10px;color:#508327;text-align: left">
        <table class="table table-striped">
          <thead>
          <tr class="text-info">
            <th class="th-nodecheck">
              <i class="icon-check-o"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Pin nodes to display first"
                 @click="orderTable(['-stats.block.number', 'stats.block.propagation'], false)"
              ></i>
            </th>
            <th class="th-nodename">
              <i class="icon-node"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Node name"
                 @click="orderTable(['info.name'], false)"></i>
            </th>
            <th class="th-nodetype">
              <i class="icon-laptop"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Node version"
                 @click="orderTable(['info.node'], false)"></i>
            </th>
            <th class="th-latency">
              <i class="icon-clock"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Node latency"
                 @click="orderTable(['stats.latency'], false)"></i>
            </th>

            <th>
              <i class="icon-block"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Last block"
                 @click="orderTable(['-stats.block.number', 'stats.block.propagation'], false)"></i>
            </th>
            <!--<th class="th-blockhash">&nbsp;</th>-->
            <th class="th-blockhash">
              <i class="icon-difficulty"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Block hash"
                 @click="orderTable(['-stats.block.totalDifficulty'], false)"></i>
            </th>
            <th>
              <i class="icon-check-o"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Block transactions"
                 @click="orderTable(['-stats.block.transactions.length'], false)"></i>
            </th>

            <th class="th-blocktime">
              <i class="icon-database"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Produced blocks"
                 @click="orderTable(['-stats.block.received'], false)"></i>
            </th>
            <th class="th-peerPropagationTime">
              <i class="icon-gas"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Missed block"
                 @click="orderTable(['-stats.block.number', 'stats.block.propagation'], false)"></i>
            </th>

          </tr>
          </thead>
          <tbody>
          <!--{{ node.stats | mainClass : bestBlock }}-->
          <tr class="" v-for="(node,index) in nodes" :key="index">
            <td class="td-nodecheck">
              <i :class="pinArray.indexOf(node.username) === -1 ? 'icon-loader' : 'icon-check-o'"
                 @click="pinNode(node)"
                 data-toggle="tooltip"
                 data-placement="right"
                 data-original-title="Click to pin">
              </i>
            </td>
            <td :rel="node.username" style="text-align: left;">
              <span class="small"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-html="true"
                    :data-original-title="node">
                {{node.username}}
              </span>
              <span class="small"

                    data-toggle="tooltip"
                    data-placement="top"
                    data-html="true"
                    data-original-title="Netstats client needs update.&lt;br&gt;Click this icon for instructions."
              >
                <i class="icon-warning-o"></i>
              </span>
            </td>
            <td>
              <div class="small">{{node.version}}</div>
            </td>
            <td class="">
              <span class="small">{{ node.latency }}&nbsp;ms</span>
            </td>

            <td class="">
              <span class="">
                {{'#'}}{{ node.height }}
              </span>
            </td>

            <td class=""><span class="small">{{node.blockId}}</span></td>
            <td>{{node.transactionBlock}}</td>
            <td class="" style="text-align: left">
              {{node.producedBlocks }}
            </td>
            <td class="">
              <div></div>
              <span>{{node.missBlocks}}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "home",
    data: () => ({
      block: {
        difficulty: "",
        forger: {
          username: "",
          address: "",
          publicKey: "",
          rate: "",
          productivity: 0
        },
        hash: "",
        number: 0,
        totalDifficulty: "",
        transactions: [],
        uncles: 0,
      },
      nodes: [],
      lastBlockTime: 0,
      blockTime: [],
      transactionsTime: [],
      pinArray: [],
      stats: {
        active: false,
        badPeers: 0,
        delegateCount: 0,
        forging: false,
        peers: 0,
        syncing: false,
        uptime: 0
      }

    }),
    mounted () {
      this.interval = setInterval(() => {
        this.lastBlockTime = this.lastBlockTime + 1;
      }, 1000)
    },
    sockets: {
      connect () {
        this.isConnected = true;
        this.$toasted.show('Connected to network', { duration: 3000 })
      },

      disconnect () {
        this.isConnected = false;
        this.$toasted.show('Trying reconnect to network', { duration: 3000 })
      },

      block (msg) {
        this.block = msg.block;
        window.$('.spark1').sparkline(msg.block.timeblock, {
          type: 'bar',
          barColor: 'green',
          barWidth: '10px',
          height: 150
        });
        window.$('.spark2').sparkline(msg.block.reportTransactions, {
          type: 'bar',
          barColor: 'green',
          barWidth: '10px',
          height: 150
        });
        if (msg.block.time) {
          this.lastBlockTime = Math.ceil(Number(msg.block.time) / 1000);
        }
      },
      node (msg) {
        try {
          if (!msg) return;
          const nodes = JSON.parse(JSON.stringify(msg));
          this.$nextTick(function () {
            this.nodes = this.sortNodes(nodes);
          })
        } catch (err) {
        }
      },

      stats (msg) {
        if (!msg) return;
        this.stats = msg.stats;
      },
    },
    methods: {
      orderTable () {

      },
      pinNode (node) {
        const index = this.pinArray.indexOf(node.username);
        if (index === -1) {
          this.pinArray.push(node.username);
        } else {
          this.pinArray.splice(index, 1);
        }
        const nodes = [...this.nodes];
        this.nodes = this.sortNodes(nodes);
      },
      sortNodes (nodes) {
        nodes.sort((a, b) => a.height > b.height ? -1 : 1);
        nodes.sort((a, b) => {
          if (this.pinArray.indexOf(a.username) === -1) {
            return 1
          } else return -1
        });
        return nodes;
      },
      convertForGraph (array) {
        return array.map((a, index) => {
          return [null, parseFloat(a / 1000).toFixed(2)]
        })
      }
    }
  };
</script>

<style>
  .home {
    padding: 0 30px;
    width: 100vw;
    min-height: 95vh;
  }
</style>
