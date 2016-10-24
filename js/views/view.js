define([], function() {

    var View = function(model) {
        var self = this;

        function init() {
            var wrapper = _.template($('#wrapp-tmpl').html());
            $('body').append(wrapper);

            self.elements = {
                newTask: $('.new-task'),
                addBtn: $('.add-btn'),
                listContainer: $('.item-list'),
                editInput: $('.templEdit__save')
            };

            self.renderList(model);
        }

        self.renderList = function(data) {
            var list = _.template($('#task-template').html());
            var res = list(data);
            self.elements.listContainer.html(res);
        };

        self.editItem = function(title, element) {
            var edit = _.template($('#templEdit').html());
            var res = edit({
                title: title
            });
            element.html(res);
        };

        init();
    };
    return View;
});
