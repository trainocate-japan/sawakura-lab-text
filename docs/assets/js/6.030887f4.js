(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{239:function(t,v,_){t.exports=_.p+"assets/img/sawakura-aws-lab.drawio.3ae1dc43.svg"},281:function(t,v,_){"use strict";_.r(v);var s=_(14),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"さわってわかるクラウド入門-aws演習"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#さわってわかるクラウド入門-aws演習"}},[t._v("#")]),t._v(" さわってわかるクラウド入門 AWS演習")]),t._v(" "),v("h6",{attrs:{id:"v23-06-01-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v23-06-01-1"}},[t._v("#")]),t._v(" v23.06.01.1")]),t._v(" "),v("h1",{attrs:{id:"概要"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),v("ul",[v("li",[t._v("AWS環境上に、Webサーバーとリレーショナルデータベースを用いた標準的な構成のWebアプリケーションを構築します")]),t._v(" "),v("li",[t._v("EC2でのWebサーバーの作成と、RDSでのMariaDBサーバーの構築を体験できます。ネットワークはすでに作成済みのため、すぐにサーバー構築に取り掛かることができます")]),t._v(" "),v("li",[t._v("演習が完了すると、以下の構成が出来上がります。受講者様PCのWebブラウザからEC2インスタンスに接続し、Webアプリケーションの動作確認を実施します\n"),v("img",{attrs:{src:_(239),alt:"構成図"}})]),t._v(" "),v("li",[t._v("所要時間は約40分です")])]),t._v(" "),v("hr"),t._v(" "),v("h1",{attrs:{id:"この演習で学べること"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#この演習で学べること"}},[t._v("#")]),t._v(" この演習で学べること")]),t._v(" "),v("ul",[v("li",[t._v("AWSマネージメントコンソールの基本的な使い方")]),t._v(" "),v("li",[t._v("セキュリティグループの設定方法")]),t._v(" "),v("li",[t._v("検証環境向けのRDSインスタンスの構築方法")]),t._v(" "),v("li",[t._v("検証環境向けのEC2インスタンスの構築方法")])]),t._v(" "),v("h1",{attrs:{id:"演習の前にお読みください"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#演習の前にお読みください"}},[t._v("#")]),t._v(" 演習の前にお読みください")]),t._v(" "),v("ul",[v("li",[t._v("マネージメントコンソールへのログインURL、ユーザー名、パスワードは受講当日に講師から伝えられます")]),t._v(" "),v("li",[t._v("マネージメントコンソールへの文字入力は、必ず半角英数字でのみ行ってください")]),t._v(" "),v("li",[t._v("手順中に設定の指示がない場合は、画面上での値の入力や変更は不要です。次の手順に進んでください")]),t._v(" "),v("li",[t._v("設定値を入力する場合は、できるだけコピペしてください。手入力は記載ミスの恐れがあります")]),t._v(" "),v("li",[t._v("演習手順について講師に確認する場合は、項目の番号をお伝え下さい。例：2-3の手順5番")])]),t._v(" "),v("h2",{attrs:{id:"凡例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#凡例"}},[t._v("#")]),t._v(" 凡例")]),t._v(" "),v("ul",[v("li",[t._v("手順書内での凡例は以下の通りです。ご活用ください\n"),v("ul",[v("li",[t._v("補足")])]),t._v(" "),v("blockquote",[v("p",[t._v("作業手順の補足事項を記載しています")])]),t._v(" "),v("ul",[v("li",[t._v("予備知識")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("予備知識を記載しています")])]),t._v(" "),v("ul",[v("li",[t._v("注意")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("主に、作業ミスの起きやすいポイントや注意事項を記載しています")])]),t._v(" "),v("ul",[v("li",[t._v("動作不良等")])]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),v("p",[t._v("うまく動作しないときに確認するポイントを記載しています。講師に確認する際に、ご自分でもチェックしてみてください")])])])]),t._v(" "),v("h1",{attrs:{id:"演習環境の有効期限等について"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#演習環境の有効期限等について"}},[t._v("#")]),t._v(" 演習環境の有効期限等について")]),t._v(" "),v("ul",[v("li",[t._v("演習環境の有効期限は、講義当日の23時までです。23時以降になると、パスワードが変更され利用できなくなります")]),t._v(" "),v("li",[t._v("演習で作成したEC2及びRDSの各インスタンスは、20時になると自動で削除されますのでご了承ください。なお、この時間帯に作業していると、リソースが自動で削除されますのでご注意ください")]),t._v(" "),v("li",[t._v("講義終了後の演習環境でのログインは、上記時間までご自由に実施ください。演習を再度実行したい場合は、作成したEC2インスタンスやRDSインスタンスを削除してから実施してください")])]),t._v(" "),v("hr"),t._v(" "),v("h1",{attrs:{id:"演習手順"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#演習手順"}},[t._v("#")]),t._v(" 演習手順")]),t._v(" "),v("h2",{attrs:{id:"_1-awsコンソールへのログイン"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-awsコンソールへのログイン"}},[t._v("#")]),t._v(" 1. AWSコンソールへのログイン")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("講師から伝えられたログイン用のURLにWebブラウザでアクセスしてください。AWSのログイン画面が開きます")]),t._v(" "),v("blockquote",[v("p",[t._v("Zoomのチャットで配布された場合は、クリックするだけで画面が開きます")])])]),t._v(" "),v("li",[v("p",[t._v("講師から伝えられたユーザー名及びパスワードを入力して [サインイン] ボタンを押下してください")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("ログイン直後の画面に"),v("strong",[t._v("新しいAWSコンソールのホーム")]),t._v("というボックスが表示されることがあります。その場合は"),v("strong",[t._v("新しいコンソールのホームに切り替える")]),t._v("というボタンを押してください。AWSのマネージメントコンソールは、ユーザーの要望を取り入れて日々進化しているため、このような表示が出ることがあります")])])]),t._v(" "),v("li",[v("p",[t._v("マネージメントコンソールがブラウザ上に表示されます。AWSの世界へようこそ！")]),t._v(" "),v("blockquote",[v("p",[t._v("パスワードを保存するかを確認されることがありますが、どちらでも構いません。再ログインする可能性がある場合は、手間を省くために保存しても結構です")])])]),t._v(" "),v("li",[v("p",[t._v("画面右上に"),v("strong",[t._v("東京")]),t._v("と表示されていることを確認してください。東京以外の表示になっている場合はその地名をクリックし、ドロップダウンボックスから"),v("strong",[t._v("東京")]),t._v("を選択してください")])])]),t._v(" "),v("h2",{attrs:{id:"_2-セキュリティグループの作成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-セキュリティグループの作成"}},[t._v("#")]),t._v(" 2. セキュリティグループの作成")]),t._v(" "),v("ul",[v("li",[t._v("ファイアーウォールの機能であるセキュリティグループを作成します。Webサーバー用とデータベースサーバー用の2つを作成します。まずはWebサーバー用のセキュリティグループから作成しましょう")]),t._v(" "),v("li",[t._v("セキュリティグループはVPCに設定します。本来はVPCの作成から行う必要がありますが、この演習ではVPCはすでに作成済みの為、すぐにセキュリティグループを設定可能です")])]),t._v(" "),v("h4",{attrs:{id:"手順"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手順"}},[t._v("#")]),t._v(" 手順")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("画面左上の虫眼鏡アイコンのボックスに"),v("strong",[t._v("EC2")]),t._v("と入力します（小文字でも可）。表示された一覧から"),v("strong",[t._v("EC2")]),t._v("をクリックしてください")]),t._v(" "),v("blockquote",[v("p",[t._v("EC2という文字をクリックしてください。他の箇所はクリックしても反応しません")])])]),t._v(" "),v("li",[v("p",[t._v("EC2のダッシュボードが表示されます。「おかえりなさい」という吹き出しが表示されることがありますが、無視してかまいません")])]),t._v(" "),v("li",[v("p",[t._v("左側のメニューにて、"),v("strong",[t._v("セキュリティグループ")]),t._v("をクリックしてください")])]),t._v(" "),v("li",[v("p",[t._v("右上の [セキュリティグループの作成] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[t._v("以下を設定します")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("設定値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("セキュリティグループ名")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("web-sg")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("説明")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("web server security group")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("VPC")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("表示されているものを X で削除したのち、選択肢の中からLabVPCを選択")])])])])]),t._v(" "),v("li",[v("p",[t._v("インバウンドルール欄の [ルールを追加] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("カスタムTCP")]),t._v("をクリックし、"),v("strong",[t._v("HTTP")]),t._v("を選択")])]),t._v(" "),v("li",[v("p",[t._v("ソース欄にある空白のボックスをクリックし、選択肢から"),v("strong",[t._v("0.0.0.0/0")]),t._v("を選択")])]),t._v(" "),v("li",[v("p",[t._v("右下の [セキュリティグループを作成] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[t._v("作成したセキュリティグループの詳細画面に遷移します。時間に余裕があれば内容を確認してください")])]),t._v(" "),v("li",[v("p",[t._v("続けて、データベース用のセキュリティグループも作成します。左側メニューにて"),v("strong",[t._v("セキュリティグループ")]),t._v("をクリックしてください。")])]),t._v(" "),v("li",[v("p",[t._v("右上の [セキュリティグループの作成] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[t._v("以下を設定します")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("設定値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("セキュリティグループ名")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("db-sg")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("説明")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("db server security group")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("VPC")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("表示されているものを X で削除したのち、選択肢の中からLabVPCを選択")])])])])]),t._v(" "),v("li",[v("p",[t._v("インバウンドルール欄の [ルールを追加] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("カスタムTCP")]),t._v("をクリックし、"),v("strong",[t._v("MYSQL/Aurora")]),t._v("を選択")])]),t._v(" "),v("li",[v("p",[t._v("ソース欄にある空白のボックスをクリックし、選択肢から"),v("strong",[t._v("web-sg")]),t._v("を選択")])]),t._v(" "),v("li",[v("p",[t._v("[右下のセキュリティグループを作成] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[t._v("作成したセキュリティグループの詳細画面に遷します。時間に余裕があれば内容を確認してください")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("web-sgを作成するときはソースとして0.0.0.0/0というIPアドレスを設定しましたが、db-sgのときはソースとして"),v("strong",[t._v("web-sg")]),t._v("を設定しました。これは、web-sgが設定されているEC2インスタンスをソースとして信用する、という意味です。")])])])]),t._v(" "),v("h2",{attrs:{id:"_3-データベースインスタンスの作成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-データベースインスタンスの作成"}},[t._v("#")]),t._v(" 3. データベースインスタンスの作成")]),t._v(" "),v("ul",[v("li",[t._v("Webアプリケーションが表示する項目を保管しておくデータベースを作成します。これまでにデータベースの構築経験のある方はぜひ、その時の作業内容と比較してみて下さい。「マネージドデータベース」の便利さを体験してみましょう")]),t._v(" "),v("li",[t._v("データベースインスタンスは起動に数分かかるため、Webサーバーより先に構築しておくことで作業時間を短縮できます")])]),t._v(" "),v("h4",{attrs:{id:"手順-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手順-2"}},[t._v("#")]),t._v(" 手順")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("画面左上の虫眼鏡アイコンのボックスに"),v("strong",[t._v("RDS")]),t._v("と入力します（小文字でも可）。表示された一覧からRDSをクリックしてください")])]),t._v(" "),v("li",[v("p",[t._v("RDSのダッシュボードが表示されます。左側メニューにて"),v("strong",[t._v("データベース")]),t._v("をクリックしてください。データベース一覧画面に遷移します")])]),t._v(" "),v("li",[v("p",[t._v("右側の [データベースの作成] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("データベース作成方法を選択")]),t._v(" は、「標準作成」のままにしてください")])]),t._v(" "),v("li",[v("p",[t._v("エンジンのオプションにて、"),v("strong",[t._v("MariaDB")]),t._v("のタイルをクリックしてください")])]),t._v(" "),v("li",[v("p",[t._v("バージョンは、"),v("strong",[t._v("10.3.31")]),t._v("を選択します。もし10.3.31がない場合は、10.3.x のxが最大のものを選択してください")])]),t._v(" "),v("li",[v("p",[t._v("テンプレートでは、"),v("strong",[t._v("開発/テスト")]),t._v("をクリックしてください")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("設定")]),t._v("にて、以下を設定します")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("設定値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("DBインスタンス識別子")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("sawakuwa-lab-db")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("マスターユーザー名")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("admin")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("マスターパスワード")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("password")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("パスワードを確認")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("password")])])])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("DBインスタンスクラス")]),t._v("にて、"),v("strong",[t._v("バースト可能クラス（tクラスを含む）")]),t._v(" を選択します。")])]),t._v(" "),v("li",[v("p",[t._v("ドロップダウンリスト内に表示されたインスタンスクラスが "),v("strong",[t._v("db.t3.micro")]),t._v(" であることを確認して次に進んでください。異なる場合はドロップダウンリストから "),v("strong",[t._v("db.t3.micro")]),t._v(" を選択してください")])]),t._v(" "),v("li",[v("p",[t._v("ストレージに関する設定では、"),v("strong",[t._v("ストレージ割り当て")]),t._v("の値を、20GiBに変更してください（元の値は200です）")])]),t._v(" "),v("li",[v("p",[t._v("可用性と耐久性では、"),v("strong",[t._v("スタンバイインスタンスを作成しないでください")]),t._v("にチェックが入っていることを確認して次に進んでください")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("接続")]),t._v("では、以下を設定します")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("設定値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Virtual Private Cloud (VPC)")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("LabVPC")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("DBサブネットグループ")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("db-subnet-group")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("既存のVPCセキュリティグループ（ファイアーウォール）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("Choose one or more options と書かれたリストボックスをクリックし、表示されたものから db-sg を選択。続けて、「Default」の右にあるXをクリックして、Defaultを削除")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("アベイラビリティゾーン")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("ap-northeast-1a")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("DBサブネットグループは、RDSインスタンスを冗長構成にする際に配置するアベイラビリティゾーンを設定するための機能です。本来はRDSインスタンス構築よりも前に設定しておく必要がありますが、この演習では予め作成済みのものを使用しています")])])]),t._v(" "),v("li",[v("p",[t._v("追加設定をクリックして開き、データベースポートが 3306 であることを確認してください")])]),t._v(" "),v("li",[v("p",[t._v("モニタリングの項目で、"),v("strong",[t._v("拡張モニタリングの有効化")]),t._v(" のチェックを外してください")])]),t._v(" "),v("li",[v("p",[t._v("追加設定の三角をクリックして、以下を設定してください")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("設定値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("最初のデータベース名")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("labdb")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("自動バックアップを有効にします")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("チェックを外してください")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("暗号化")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("チェックを外してください")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("削除保護の有効化")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("チェックを外してください"),v("br"),t._v("チェックされてない場合はそのままで結構です")])])])])]),t._v(" "),v("li",[v("p",[t._v("一番下まで進み、[データベースの作成] ボタンを押下してください。しばらく待つとデータベースの一覧画面が表示されます")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("ご利用のブラウザによっては、パスワードの侵害という警告が出ることがありますが、無視して警告を閉じてください。また、ブラウザでのパスワードの保存は不要です。")])])]),t._v(" "),v("li",[v("p",[t._v("データベースインスタンスの作成が完了するまで少し時間がかかります。完了を待たずに次に進んでください")])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("RDSの設定画面は、後の手順でも利用します。ブラウザ操作に慣れている場合は、ブラウザタブを複製しておくと以降の手順の時間短縮になります")])]),t._v(" "),v("h2",{attrs:{id:"_4-webサーバー作成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-webサーバー作成"}},[t._v("#")]),t._v(" 4. Webサーバー作成")]),t._v(" "),v("ul",[v("li",[t._v("WebサーバーとなるEC2インスタンスを起動します。Webサーバーアプリケーションフレームワークには、Python製の flask を利用しています")]),t._v(" "),v("li",[t._v("サーバーアプリケーションの実行に必要なミドルウェアやアプリケーション本体は、ユーザーデータ（後述）を使ってインスタンス起動時に自動でインストールされるようにします。ですので簡単な設定だけでWebサーバーが利用できます。")])]),t._v(" "),v("h4",{attrs:{id:"手順-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手順-3"}},[t._v("#")]),t._v(" 手順")]),t._v(" "),v("h3",{attrs:{id:"_4-1-ec2インスタンス作成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-ec2インスタンス作成"}},[t._v("#")]),t._v(" 4-1. EC2インスタンス作成")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("画面左上の虫眼鏡アイコンのボックスに"),v("strong",[t._v("EC2")]),t._v("と入力します（小文字でも可）。表示された一覧からEC2をクリックしてください。EC2のダッシュボードが表示されます")]),t._v(" "),v("blockquote",[v("p",[t._v("最初の作業でセキュリティグループの作成を行っているので、セキュリティグループの画面が表示されるかもしれませんが、気にせず先の手順に進んでください")])])]),t._v(" "),v("li",[v("p",[t._v("左側メニューで、"),v("strong",[t._v("インスタンス")]),t._v("をクリックしてください")]),t._v(" "),v("blockquote",[v("p",[t._v("先頭に三角のアイコンの付いていない方をクリックしてください")])])]),t._v(" "),v("li",[v("p",[t._v("画面右上にある [インスタンスを起動] ボタンを押下してください。インスタンスを起動するための画面に遷移します")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("EC2インスタンスを作成することを、「起動」と言います。また、「シャットダウン」はEC2インスタンスの削除を意味します")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("名前とタグ")]),t._v("のボックスに、インスタンスの名前を設定します。ボックスに websv と入力したら、次に進んでください")])]),t._v(" "),v("li",[v("p",[t._v("起動するOSを確認します。以下を確認してください")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("説明")]),t._v("の下に、"),v("strong",[t._v("Amazon Linux 2 Kernel 5.10 AMI 2.0.20220912.1 x86_64 HVM gp2")]),t._v(" とあること")])]),t._v(" "),v("blockquote",[v("p",[t._v("20220912 の部分は違う表記でも問題ありません")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("アーキテクチャ")]),t._v("が、 "),v("strong",[t._v("64ビット (x86)")]),t._v(" になっていること")])])]),t._v(" "),v("li",[v("p",[t._v("もし表記が上記と異なっている場合は、"),v("strong",[t._v("Amazonマシンイメージ（AMI)")]),t._v(" のドロップダウンボックスから、上記の 説明 の状態になるものを選択してください")])]),t._v(" "),v("li",[v("p",[t._v("次にインスタンスタイプ、つまりインスタンスのスペックを確認します。インスタンスタイプの下の表記が "),v("strong",[t._v("t2.micro")]),t._v(" であることを確認してください。もし異なる場合は、ドロップダウンボックスから t2.micro を選択してください")])]),t._v(" "),v("li",[v("p",[t._v("次のキーペアは今回は利用しません。ドロップダウンボックスから、 "),v("strong",[t._v("キーペアなしで続行")]),t._v(" を選択してください")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("キーペアは、インスタンスにSSHログインするための認証鍵です。今回はSSHではない方法でインスタンスにログインするので不要です")])])]),t._v(" "),v("li",[v("p",[t._v("次はネットワークの設定を行います。右にある [編集] ボタンを押して、以下を設定してください")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("設定値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("VPC")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("LabVPC")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("サブネット")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("PublicSubnet")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("パブリックIPの自動割り当て")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("有効化"),v("br"),t._v("※自動で設定されているはずですが、ご確認ください")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("ファイアーウォール（セキュリティグループ）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("既存のセキュリティグループを選択する を選択したあと、"),v("br"),t._v("共通のセキュリティグループにて web-sg を選択")])])])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("次に進む前に、以下をよく確認してください"),v("br")]),t._v(" "),v("ul",[v("li",[t._v("サブネットの選択で、"),v("strong",[t._v("PublicSubnet")]),t._v(" を選択しているか"),v("br")]),t._v(" "),v("li",[t._v("セキュリティグループで、"),v("strong",[t._v("web-sg")]),t._v(" を選択しているか")])])])]),t._v(" "),v("li",[v("p",[t._v("ストレージを設定 は変更不要です。そのまま先に進んでください")])]),t._v(" "),v("li",[v("p",[t._v("高度な詳細 を2か所設定します（指示のない場所は変更不要です）。もし、高度な詳細のメニューが開かれていない場合は、頭にある▼をクリックして展開してください")])]),t._v(" "),v("li",[v("p",[t._v("IAMインスタンスプロフィール のドロップダウンボックスから "),v("strong",[t._v("Ec2DefaultRole")]),t._v(" を選択してください")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("ユーザーデータ")]),t._v("が表示されるまで下にスクロールし、ボックスに以下の全ての行をコピペしてください")]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" python3 python3-pip "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" mariadb\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pip3 "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flask pymysql python-dotenv\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/trainocate-japan/sawakura-labs.git /home/ec2-user/sawakura-labs\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" ec2-user:ec2-user /home/ec2-user/\n")])])]),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("ユーザーデータは、EC2インスタンスの起動時にスクリプトを自動で実行してくれる機能です。\nミドルウェアのアップデートなどOSのインストール後に必ず実行する処理や、アプリケーションのインストール作業などを自動化することができます")])])]),t._v(" "),v("li",[v("p",[t._v("これで設定は完了です。[インスタンスの起動] ボタンを押下してください。画面が遷移し、情報が表示されます。[インスタンスの表示] ボタンを押下してください")])]),t._v(" "),v("li",[v("p",[t._v("インスタンスの状態が "),v("strong",[t._v("保留中")]),t._v("から"),v("strong",[t._v("実行中")]),t._v("に変わるまでお待ちください（通常数秒で変わります）")]),t._v(" "),v("blockquote",[v("p",[t._v("保留中という表記は pending と表示されることもあります。同じく、実行中の表記は running と表示されることがあります")])])]),t._v(" "),v("li",[v("p",[t._v("インスタンスの行をどこでもよいのでクリックしてください。画面下半分にインスタンスの情報が表示されます")])]),t._v(" "),v("li",[v("p",[t._v("右の列に"),v("strong",[t._v("パブリックIPv4 DNS")]),t._v("という記載があるので、そのアドレスをテキストエディタ等にコピペして保管してください")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("ホスト名の左にある四角いアイコンをクリックするとコピーできます")])])])]),t._v(" "),v("h3",{attrs:{id:"_4-2-データベースのホスト名確認"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-データベースのホスト名確認"}},[t._v("#")]),t._v(" 4-2. データベースのホスト名確認")]),t._v(" "),v("ul",[v("li",[t._v("そろそろデータベースの起動が完了しているはずです。Webアプリケーションを使うために必要なデータベースのホスト名を確認しましょう")])]),t._v(" "),v("h4",{attrs:{id:"手順-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手順-4"}},[t._v("#")]),t._v(" 手順")]),t._v(" "),v("ol",[v("li",[t._v("画面左上の虫眼鏡アイコンのボックスに"),v("strong",[t._v("RDS")]),t._v("と入力します（小文字でも可）。表示された一覧から"),v("strong",[t._v("RDS")]),t._v("をクリックします")]),t._v(" "),v("li",[t._v("左側メニューより、"),v("strong",[t._v("データベース")]),t._v("をクリックします")]),t._v(" "),v("li",[t._v("データベース一覧が表示されます。sawakura-lab-dbをクリックしてデータベースの詳細情報を表示してください")]),t._v(" "),v("li",[v("strong",[t._v("エンドポイント")]),t._v("という欄に「sawakura-lab-db.xxxxxx.ap-northeast-1.rds.amazonaws.com」 のような文字列が表示されています。これがデータベースのホスト名です。この文字列を全てコピーしてテキストエディタなどに貼り付けて保管しておいてください。")])]),t._v(" "),v("h3",{attrs:{id:"_4-3-ec2インスタンスのシェルへログイン"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-ec2インスタンスのシェルへログイン"}},[t._v("#")]),t._v(" 4-3. EC2インスタンスのシェルへログイン")]),t._v(" "),v("ul",[v("li",[t._v("Webアプリケーションを起動するためにシェルにログインします。通常はTeratermなどでSSH接続 しますが、今回はAWSマネージメントコンソールから直接インスタンスのシェルにログイン可能な、SessionManagerという機能を使います")])]),t._v(" "),v("h4",{attrs:{id:"手順-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手順-5"}},[t._v("#")]),t._v(" 手順")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("以降、コピペの作業が発生しますので、ペーストのミスがないか注意しながら進めてください。また、Ctrl-Vでのペーストができない場合は、マウスの右クリックメニューからのペーストなどを試してみてください")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("画面左上の虫眼鏡アイコンのボックスに"),v("strong",[t._v("EC2")]),t._v("と入力します（小文字でも可）。表示されたメニューの"),v("strong",[t._v("EC2")]),t._v("をクリックします")])]),t._v(" "),v("li",[v("p",[t._v("インスタンス一覧に、先程起動したEC2インスタンスが表示されます。インスタンスの行をどこでもよいので右クリックしてメニューを表示し、"),v("strong",[t._v("接続")]),t._v("を選択してください")])]),t._v(" "),v("li",[v("p",[t._v("インスタンスに接続 という画面に切り替わります。"),v("strong",[t._v("セッションマネージャー")]),t._v("というタブをクリックしてください")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("セッションマネージャーの他に、EC2 Instance Connectなどのタブも並んでいます。間違えないようにご注意ください")])])]),t._v(" "),v("li",[v("p",[t._v("右下の[接続]ボタンが"),v("strong",[t._v("オレンジ色で表示されること")]),t._v("を確認してください。オレンジ色で表示されていれば、[接続]を押下してください")]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),v("p",[t._v("接続ボタンがオレンジ色にならない場合は以下を確認してください")]),t._v(" "),v("ul",[v("li",[t._v("web-sgセキュリティグループのアウトバウンドに0.0.0.0/0が設定されているか（デフォルトで設定されていますが、まれに作業ミスで削除や変更してしまうケースがあります）")]),t._v(" "),v("li",[t._v("EC2インスタンスのIAMロールに"),v("strong",[t._v("Ec2DefaultRole")]),t._v("が設定されているか")])])])]),t._v(" "),v("li",[v("p",[t._v("接続ボタンを押下すると、しばらくしてインスタンスのシェルに接続され、Linuxコマンドが実行可能な状態になります。"),v("strong",[t._v("sh-4.2$")]),t._v(" と表示されるまで、少しお待ち下さい")])]),t._v(" "),v("li",[v("p",[t._v("Webアプリケーションの配置されているLinuxユーザーに切り替えます。次のコマンドを実行してください")]),t._v(" "),v("blockquote",[v("p",[t._v("sh-4.2$  の後にコピー＆ペーストしてからEnterキー、で実行できます")])]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" - ec2-user\n")])])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("[ec2-user@ip-X-X-X-X]$")]),t._v(" と表示されれば問題ありません。次に進んでください")])]),t._v(" "),v("li",[v("p",[t._v("続けて、Webアプリケーションの配置されたディレクトリに移動します。次のコマンドを実行してください")]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" sawakura-labs\n")])])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("EC2インスタンスを起動するときに設定したユーザースクリプトにより、Webアプリケーション一式がsawakura-labsというディレクトリにダウンロードされています。時間に余裕があれば、ディレクトリの中身を見てみてください")])]),t._v(" "),v("h2",{attrs:{id:"_5-webアプリケーションの実行と動作確認"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-webアプリケーションの実行と動作確認"}},[t._v("#")]),t._v(" 5. Webアプリケーションの実行と動作確認")]),t._v(" "),v("ul",[v("li",[t._v("いよいよアプリケーションを実行します。アプリケーションはユーザーデータを使ってインストール済みなため、データベースの設定を行うだけで実行できます")])]),t._v(" "),v("h4",{attrs:{id:"手順-6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手順-6"}},[t._v("#")]),t._v(" 手順")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("先程の作業に続けて、以下のコマンドを実行してください。これでWebアプリケーションが起動します")]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python3 app.py\n")])])])]),t._v(" "),v("li",[v("p",[t._v("問題なく起動すると、以下のようなメッセージが表示され、Webブラウザからのアクセスを受け付けられる状態になります（表示内容は環境により異なります）")]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[t._v("* Serving Flask app "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lazy loading"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n* Environment: production\nWARNING: This is a development server. Do not use it "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a production deployment.\nUse a production WSGI server instead.\n* Debug mode: off\n* Running on all addresses.\nWARNING: This is a development server. Do not use it "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a production deployment.\n* Running on http://10.0.1.xx:80/ "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Press CTRL+C to quit"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),v("li",[v("p",[t._v("ブラウザで新たに別のタブを開いてください。テキストエディタ等に保管しておいたEC2インスタンスのホスト名（パブリックIPv4 DNS）をブラウザのURL欄にペーストして、Enterキーを押下してください")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("パブリックIPv4 DNS は、ec2-xxx-xxx-xxx-xxx.ap-northeast-1.compute.amazonaws.comのような文字列です。データベースのホスト名と間違えないようにご注意ください")])])]),t._v(" "),v("li",[v("p",[t._v("Webアプリケーションが動作し、"),v("strong",[t._v("データベースホスト設定")]),t._v("というページが表示されるはずです")]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),v("p",[t._v("ページが表示されない場合は、以下が原因の可能性が高いです。確認してみましょう")]),t._v(" "),v("ul",[v("li",[t._v("セキュリティグループ web-sg の設定間違い（ソースアドレスや、誤ってアウトバウンド側を設定変更していた、など）")]),t._v(" "),v("li",[t._v("セキュリティグループ db-sg の設定間違い（ソースアドレスや、誤ってアウトバウンド側を設定変更していた、など）")]),t._v(" "),v("li",[t._v("ブラウザに貼り付けたURLのコピペミス")])])])]),t._v(" "),v("li",[v("p",[t._v("テキストエディタ等に保管しておいたデータベースのホスト名を画面中のボックスにペーストし、[設定]ボタンを押下してください")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("データベースのホスト名 は、sawakura-lab-db.xxxxxx.ap-northeast-1.rds.amazonaws.comのような文字列です。EC2インスタンスのパブリックIPv4 DNSと間違えないようにしましょう")])])]),t._v(" "),v("li",[v("p",[t._v("ここまでの手順が問題なければ、弊社のクラウドコース一覧が表示されるはずです。ぜひ、今後ともご贔屓にお願い致します！")])]),t._v(" "),v("li",[v("p",[t._v("以上で演習は終了です。お疲れさまでした！")])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("データベースのホストを入力しただけでクラウドコースの一覧が表示されることを不思議に思われたかもしれません。RDSの構築作業では、データベース名とユーザー名等は設定しましたが、データの中身までは定義していませんでした。")]),t._v(" "),v("p",[t._v("実は、app.pyの中でクラウドコースの一覧のデータを入力しています。データベースのホスト名が設定されたあとに、SQLを発行してクラウドコースの一覧を投入しているのです。興味のある方は、app.pyの中身を確認してみてください")])]),t._v(" "),v("h1",{attrs:{id:"おわりに"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#おわりに"}},[t._v("#")]),t._v(" おわりに")]),t._v(" "),v("ul",[v("li",[t._v("お疲れ様でした！AWSの演習はいかがだったでしょうか？")]),t._v(" "),v("li",[t._v("このプロセスと同じことを、もしオンプレミスで実施した場合、どれくらいの時間と手間がかかったでしょうか？  クラウドの便利さや手軽さが伝われば幸いです。")]),t._v(" "),v("li",[t._v("もしよろしければ、Zoomチャットなどで演習の感想を聞かせてください！")])])])}),[],!1,null,null,null);v.default=a.exports}}]);