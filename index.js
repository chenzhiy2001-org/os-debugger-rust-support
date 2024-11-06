	public async getStringVariable(name:string):Promise<string>{
		const node = await this.miDebugger.sendCliCommand('x /s ' + name );
		const resultstring = this.miDebugger.getOriginallyNoTokenMINodes(node.token)[0].outOfBandRecord[0].content;
		this.showInformationMessage("`getStringVariable` got string: " + resultstring);
		return /"(.*?)"/.exec(resultstring)[1];// we want things INSIDE double quotes so it's [1], the first captured group.
	}
