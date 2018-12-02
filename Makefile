GAME_DIR:=game

build:
	cd $(GAME_DIR) && \
	npm install

clean:
	rm -rf $(GAME_DIR)/dist $(GAME_DIR)/node_modules

run:
	cd $(GAME_DIR) && \
	npm start

upgrade:
	cd $(GAME_DIR) && \
	npm-check-updates -u