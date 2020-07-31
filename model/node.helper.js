class NodeHelper {
    constructor() {
        throw new Error('You shall not instantiate this, Helper is static');
    }
    static build(jsonNodes) {
        /**
         * Given a tree of Nodes as json build objects in correct order.
         * NOTE: we know that, look at nodes.mock.json, the list in json format
         * could contains a "parent" property. It means the node you are building
         * has to be attached as children of Node n, where n.id===jsonNode.id
         */
    }
}

module.exports = NodeHelper;