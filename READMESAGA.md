SAGA 使用


Effects
        
        
        Fork 执行一个非阻塞操作。
        Take 暂停并等待action到达。
        Race 同步执行多个 effect，然后一旦有一个完成，取消其他 effect。
        Call 调用一个函数，如果这个函数返回一个 promise ，那么它会阻塞 saga，直到promise成功被处理。
        Put 触发一个Action。
        Select 启动一个选择函数，从 state 中获取数据。
        takeLatest 意味着我们将执行所有操作，然后返回最后一个(the latest one)调用的结果。如果我们触发了多个时间，它只关注最后一个(the latest one)返回的结果。
        takeEvery 会返回所有已出发的调用的结果。
