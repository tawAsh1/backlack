// Replace {your-space} to your backlog space name.
exports.ticketUrl = 'https:///goldleaves.backlog.jp/view/{key}';
exports.ticketCommentUrl = 'https:///goldleaves.backlog.jp/view/{key}#comment-{id}';
exports.pullRequestUrl = 'https:///goldleaves.backlog.jp/git/{key}/{repo}/pullRequests/{number}#comment-{id}';
exports.channels = {
    ProjectKey: 'https://hooks.slack.com/services/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';
};
exports.statuses = ['', '未対応', '処理中', '処理済み', '完了'];
exports.resolutions = {'': '(未設定)',  '0': '対応済み', '1': '対応しない', '2': '無効', '3': '重複', '4': '再現しない'};
