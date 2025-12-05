$(function () {

    $("#shoppingList").sortable();

    $("#addBtn").click(function () {
        let val = $("#productInput").val();
        if (val !== "") {
            $("#shoppingList").append(`<li class="list-group-item">${val}</li>`);
            $("#productInput").val("");
        }
    });

    $("#addStartBtn").click(function () {
        let val = $("#productInput").val();
        if (val !== "") {
            $("#shoppingList").prepend(`<li class='list-group-item'>${val}</li>`);
            $("#productInput").val("");
        }
    });

    $("#addEndBtn").click(function () {
        let val = $("#productInput").val();
        if (val !== "") {
            $("#shoppingList").append(`<li class='list-group-item'>${val}</li>`);
            $("#productInput").val("");
        }
    });

    $("#removeLastBtn").click(function () {
        $("#shoppingList li:last").remove();
    });

    $("#clearBtn").click(function () {
        $("#shoppingList").empty();
    });

    $("#restoreBtn").click(function () {
        $("#shoppingList").html(`
            <li class="list-group-item">Chleb</li>
            <li class="list-group-item">Mleko</li>
            <li class="list-group-item">Jajka</li>
        `);
    });

    $("#colorBtn").click(function () {
        $("#shoppingList li:even").css("background", "#f2f2f2");
    });

    $(document).on("click", "#shoppingList li", function () {
        let li = $(this);
        let text = li.text();

        let input = $("<input type='text' class='editBox'>").val(text);

        li.fadeOut(200, function () {
            li.html(input).fadeIn(200);
            input.focus();
        });

        input.keypress(function (e) {
            if (e.which === 13) {
                let newText = $(this).val();
                li.fadeOut(200, function () {
                    li.text(newText).fadeIn(200);
                });
            }
        });

        li.toggleClass("active");
    });

    $("#sortBtn").click(function () {
        let items = $("#shoppingList li").get();

        items.sort(function (a, b) {
            return $(a).text().localeCompare($(b).text());
        });

        $("#shoppingList").empty().append(items);
    });

    $("#filterBtn").click(function () {
        let phrase = $("#filterInput").val().toLowerCase();

        $("#shoppingList li").each(function () {
            let text = $(this).text().toLowerCase();

            $(this).toggle(text.includes(phrase));
        });
    });

});